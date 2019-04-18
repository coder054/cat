import React, { Component } from "react";

import LineTo from "react-lineto";
import { decorate, observable, toJS } from "mobx";
import { observer } from "mobx-react";
import axios from "axios";
import classNames from "classnames";
import matchingData from "./../data/matching.json";
import { remove_character, scrollToMyRef, nextQuestion } from "./../helpers/index.js";


var audioUrl =
  "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-18146/zapsplat_multimedia_click_003_19369.mp3?_=1";
var audio = new Audio(audioUrl);

const Commont = observer(
  class Commont extends Component {
    isStart = false;
    data = [];
    lineData = [];
    resultList = []; // [true, false, null] cau dau tien dung, cau thu hai sai, cau thu ba chua tra loi
    currentIndex = 1;
    index = 0;
    showAnswer = false;
    isClickXemKetQua = false;
    modalIsOpen = false;

    reset = (redrawMode = false) => {
      let a = this.lineData[this.index];
      for (let i = 0; i < this.numberOfQuestion(this.data[this.index]); i++) {
        a[i] = { from: "", to: "" };
      }

      if (!redrawMode) {
        this.resultList[this.index] = null;
      } else {
      }
      console.log("this.lineData", toJS(this.lineData));
    };

    reDrawLines = () => {
      let a = this.lineData[this.index];
      let b = [...a];
      this.reset(true);

      for (let i = 0; i < b.length; i++) {
        setTimeout(() => {
          a[i] = { from: b[i].from, to: b[i].to };
        }, 400);
      }
    };

    showKetQua = () => {
      return this.numberOfQuestionLeft() === 0;
    };

    // nextQuestion = () => {
    //  if (this.index >= this.data.length - 1) return
    //  setTimeout(() => this.myEl.classList.toggle('closed'), 200)
    //  setTimeout(() => this.myEl.classList.toggle('closed'), 800)
    //  setTimeout(() => {
    //    this.index++
    //  }, 500)
    // }

    ketquaCuthe = () => {
      let socaudung = 0;
      for (let i = 0; i < this.resultList.length; i++) {
        if (this.resultList[i]) {
          socaudung++;
        }
      }
      localStorage.setItem("common", socaudung);
      return (
        <div className="questionLeft">
          Your score is: {socaudung} / {this.data.length}!
        </div>
      );
    };
    numberOfImageOfCurrentQuestion() {
      let number = 0;
      let question = this.data[this.index].acf.question;
      if (question.question_1 && question.question_1.image) {
        number++;
      }
      if (question.question_2 && question.question_2.image) {
        number++;
      }
      if (question.question_3 && question.question_3.image) {
        number++;
      }
      if (question.question_4 && question.question_4.image) {
        number++;
      }
      return number;
    }

    numberOfQuestion(currentQuestion) {
      let number = 0;
      let question = currentQuestion.acf.question;
      if (question.question_1 && question.question_1.image) {
        number++;
      }
      if (question.question_2 && question.question_2.image) {
        number++;
      }
      if (question.question_3 && question.question_3.image) {
        number++;
      }
      if (question.question_4 && question.question_4.image) {
        number++;
      }
      return number;
    }

    numberOfQuestionLeft() {
      let number = 0;
      for (let i = 0; i < this.resultList.length; i++) {
        if (this.resultList[i] === null) {
          number++;
        }
      }
      return number;
    }

    handleLeftImageClick(from) {
      console.log("handleleftclik");
      console.log("from", from);

      let a = this.lineData[this.index];

      for (let i = 0; i < a.length; i++) {
        if (a[i].from) {
        } else {
          a[i].from = from;
          break;
        }
      }

      this.checkAnswer();
      console.log("this.lineData", toJS(this.lineData));
    }

    handleRightImageClick(to) {
      console.log("to", to);
      let a = this.lineData[this.index];

      for (let i = 0; i < a.length; i++) {
        if (a[i].to) {
        } else {
          a[i].to = to;
          break;
        }
      }

      this.checkAnswer();
      console.log("this.lineData", toJS(this.lineData));
    }

    renderKetQua() {
      if (this.isClickXemKetQua) {
        return (
          <div>
            {this.resultList[this.index] === null ? null : (
              <div>
                <div> {this.ketquaCuthe()} </div>
                {this.resultList[this.index] === true ? (
                  <div className="text-success traloidung">
                    <i className="fa fa-check" /> Correct
                  </div>
                ) : (
                  <div className="text-danger traloisai">
                    <i className="fa fa-times" /> Incorrect
                  </div>
                )}
              </div>
            )}
          </div>
        );
      } else {
        return null;
      }
    }
    checkAnswer() {
      let a = this.lineData[this.index];
      // neu van con anh chua noi het, khong check nua
      for (let i = 0; i < a.length; i++) {
        if (!a[i].from || !a[i].to) {
          return;
        }
      }
      // nguoi dung noi tat ca cac anh, tiep tuc
      let acf = this.data[this.index].acf;

      for (let i = 0; i < this.numberOfImageOfCurrentQuestion(); i++) {
        let questionName = remove_character(a[i].from, 9);
        let answerName = remove_character(a[i].to, 7);

        if (acf.question[questionName].tag !== acf.answer[answerName].tag) {
          this.resultList[this.index] = false;
          nextQuestion(this.index, this.data.length, this.myEl, () => {
            this.index++;
          });
          return;
        }
      }
      this.resultList[this.index] = true;
      nextQuestion(this.index, this.data.length, this.myEl, () => {
        this.index++;
      });
    }

    componentDidMount() {
      this.data = matchingData;
      for (let i = 0; i < this.data.length; i++) {
        this.lineData.push([]);
        this.resultList.push(null);

        for (let j = 0; j < this.numberOfQuestion(this.data[i]); j++) {
          this.lineData[i].push({ from: "", to: "" });
        }
      }

      // NEU DUNG AXIOS THI DUNG DOAN CODE DUOI VA COMMENT DOAN CODE TREN
      // axios.get("http://khoi.catopiana.com/wp-json/acf/v3/matching?fbclid=IwAR1F4CnA83XLTVrONGyjWHP-gq_v_HS9_wF7FRoHjUmMo0GCd9NvOI9-eww")
      // .then(({data}) => {
      //  this.data = data
      //  for(let i = 0; i < this.data.length; i++){
      //    this.lineData[i] = {from1: null, from2: null, from3: null, to1: null, to2: null, to3: null, currentIndex: 1}
      //    this.resultList.push(null)

      //  }

      // })
      // .catch(err => console.log('err', err))
    }

    renderContent() {
      if (!this.isStart) {
        return (
          <div className="container test-content">
            <p className="nhannutstart"> Press Start to begin the test! </p>
            <button
              className="start-btn"
              onClick={e => {
                setTimeout(() => (this.isStart = true), 300);
              }}
            >
              {" "}
              Start!{" "}
            </button>
          </div>
        );
      } else {
        let a = this.lineData[this.index];
        if (!this.data || !this.data.length) {
          return <div> Loading... </div>;
        }
        const currentQuestion = this.data[this.index];
        const {
          acf: {
            answer: { answer_1, answer_2, answer_3 },
            question: { question_1, question_2, question_3 }
          }
        } = currentQuestion;

        return (
          <div className="Commont-wrapper container test-content">
            {this.renderLines()}

            <div className="left-right-wr">
              <div className="left">
                {!!question_1.image && (
                  <img
                    onClick={e => {
                      this.handleLeftImageClick(`question_${this.index}1`);
                      audio.play();
                    }}
                    className={`question_${this.index}1`}
                    src={question_1.image}
                    alt=""
                  />
                )}

                {!!question_2.image && (
                  <img
                    onClick={e => {
                      this.handleLeftImageClick(`question_${this.index}2`);
                      audio.play();
                    }}
                    className={`question_${this.index}2`}
                    src={question_2.image}
                    alt=""
                  />
                )}

                {!!question_3.image && (
                  <img
                    onClick={e => {
                      this.handleLeftImageClick(`question_${this.index}3`);
                      audio.play();
                    }}
                    className={`question_${this.index}3`}
                    src={question_3.image}
                    alt=""
                  />
                )}
              </div>
              <div className="right">
                {!!answer_1.image && (
                  <img
                    onClick={e => {
                      this.handleRightImageClick(`answer_${this.index}1`);
                      audio.play();
                    }}
                    className={`answer_${this.index}1`}
                    src={answer_1.image}
                    alt=""
                  />
                )}

                {!!answer_2.image && (
                  <img
                    onClick={e => {
                      this.handleRightImageClick(`answer_${this.index}2`);
                      audio.play();
                    }}
                    className={`answer_${this.index}2`}
                    src={answer_2.image}
                    alt=""
                  />
                )}

                {!!answer_3.image && (
                  <img
                    onClick={e => {
                      this.handleRightImageClick(`answer_${this.index}3`);
                      audio.play();
                    }}
                    className={`answer_${this.index}3`}
                    src={answer_3.image}
                    alt=""
                  />
                )}
              </div>
            </div>

            <div> {this.renderKetQua()} </div>
            <div className="currentQuestion"> {this.index + 1} </div>

            <div className="dot-wr">
              <div
                onClick={e => {
                  if (this.index === 0) return;
                  this.index--;
                  setTimeout(() => {
                    this.reDrawLines();
                  }, 100);
                }}
                className={classNames("prev-btn", {
                  disabled: this.index === 0
                })}
              >
                {" "}
                Previous
              </div>

              <div className="dots">
                {this.data.length && this.data
                  ? this.data.map((item, i) => (
                      <span
                        key={item.id}
                        className={classNames("dot-navigation", {
                          "is-active": this.index === i
                        })}
                        onClick={e => {
                          this.index = i;
                          setTimeout(() => {
                            this.reDrawLines();
                          }, 100);
                        }}
                      />
                    ))
                  : null}
              </div>
              <div
                onClick={e => {
                  if (this.index === this.data.length - 1) {
                    return;
                  }
                  this.index++;
                  setTimeout(() => {
                    this.reDrawLines();
                  }, 100);
                }}
                className={classNames("next-btn", {
                  disabled: this.index === this.data.length - 1
                })}
              >
                {" "}
                Next{" "}
              </div>
            </div>

            <div>
              {// !this.isClickXemKetQua
              true && (
                <p className="questionLeft">
                  {" "}
                  You have: {this.numberOfQuestionLeft()} questions left!{" "}
                </p>
              )}

              {!!this.showKetQua() && (
                <div className="show-kg-button-wr">
                  <button
                    onClick={e => {
                      this.isClickXemKetQua = true;
                      // this.index = 0
                      // this.reDrawLines()
                    }}
                    className="xemkq"
                  >
                    {" "}
                    See result!{" "}
                  </button>
                </div>
              )}

              {!this.isClickXemKetQua && (
                <div>
                  {" "}
                  <button
                    onClick={e => {
                      this.reset();
                    }}
                    className="lamlai-btn"
                  >
                    Start over!
                  </button>{" "}
                </div>
              )}
            </div>
          </div>
        );
      }
    }

    renderLines() {
      let a = this.lineData[this.index];
      return a.map((item, index) => (
        <LineTo
          key={index}
          zIndex={999}
          from={item.from}
          to={item.to}
          fromAnchor="middle right"
          toAnchor="middle left"
          borderWidth={3}
          borderColor="#006699"
        />
      ));
    }

    render() {
      return (
        <div
          ref={myEl => (this.myEl = myEl)}
          className="cauhoi-wr cauhoi-common"
        >
          {this.renderContent()}
        </div>
      );
    }
  }
);

decorate(Commont, {
  isStart: observable,
  data: observable,
  lineData: observable,
  index: observable,
  resultList: observable,
  showAnswer: observable,
  isClickXemKetQua: observable,
  modalIsOpen: observable
});

export default Commont;
