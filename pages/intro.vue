<template>
  <section class="intro">
    <div class="intro--container board">

      <!-- #1 Profile -->
      <div class="intro--container-section">
        <div class="intro--div">
          <div class="intro--div-title">
            <h2>{{ intro.title }}</h2>
          </div>
          <div class="intro--div-detail">
            <p>{{ intro.description }}</p>
          </div>
        </div>
      </div>

      <!-- #2 Education -->
      <div class="intro--container-section">
        <div class="intro--div">
          <div class="intro--div-title">
            <h2>{{ education.title }}</h2>
          </div>
          <div class="intro--div-detail">
            <p
              class="intro--div-edu-p"
              v-for="line in education.description"
              :key="line.id">
              <span class="edu--p-date">{{ line.date }}</span>
              <span class="edu--p-text">{{ line.texts }}</span>
            </p>
          </div>
        </div>
      </div>

      <!-- #3 Programming -->
      <div class="intro--container-section">
        <div class="intro--div">
          <div class="intro--div-title">
            <h2>{{ programming.title }}</h2>
          </div>
          <div class="intro--div-detail">
            <p>{{ programming.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      intro: {
          title: '# 1. Profile',
          description: `학부 때 지각 심리학과 인지 심리학 과목을 수강하며 HCI, UX에 대해 공부하였습니다. 작은 요소들로 사람들을 변화 시킬 수 있다는 관점에 빠져들게 되었고, 가장 많이 활용하는 분야가 웹/앱에서 프론트 분야였습니다.
              그래서 제가 생각한 것들을 단지 이론과 말로만 표현하는게 아닌, 직접 만들어 보고 싶다는 욕심으로 개발을 시작하게 되었습니다.`
      },
      education:
        {
          title: '# 2. Education',
          description: [
            {id: 'e1', date: '2011.03.02 ~ 2018.02.25', texts:'국립 경상대학교 심리학과 학사 졸업'},
            {id: 'e2', date: '2018.04.16 ~ 2018.11.15', texts:'엔코아 플레이데이터 빅데이터 딥러닝 전문가 양성과정 1기'},
            {id: 'e2', date: '2018.12.10 ~ 현재', texts:'삼성 청년 소프트웨어 아카데미(SSAFY) 1기',},
          ]
        },
      programming:
        {
          title: '# 3. About Programming'    ,
          description: `2018년 4월, 국비 지원 교육을 시작으로 프로그래밍을 시작했습니다. 매일 매일 에러와 싸우고, 어떻게 구현할지 고민합니다.
          하지만 무언가를 만들고, 문제를 해결하기 위해 새로운 것을 배우고 오랜 고민끝에 답을 찾는 과정은 여전히 재미있습니다.`
        }
    }
  }
}
</script>

<style lang="scss">
.intro {
  display: flex;
}

.intro--container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro--container-section {
  width: 60%;
  display: flex;
  justify-content: center;
  padding: 10px;
  .intro--div {
    width: 100%;
    border-radius: 12px;
    background-color: #fff;
    overflow: hidden;
    .intro--div-title {
      padding: 10px 20px;
      background-color: #454598;
      color: #fff;
    }
    .intro--div-detail {
      padding: 18px 20px;
      p {
        font-weight: 300;
        line-height: 1.4;
        &+& {
          margin: 8px;
        }
      }
    }
    .intro--div-edu-p {
      margin-bottom: 15px;
      span {
        font-size: 16px;
      }
      .edu--p-date {
        display: inline-block;
        width: 200px;
        padding: 6px 0 6px 12px;
        background-color: #454598;
        border-radius: 10px;
        color: #fff;
        font-family: 'Jua';
      }
      .edu--p-text {
        padding-left: 15px;
      }
    }
  }
}

</style>

