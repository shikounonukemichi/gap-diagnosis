const questions = [
  {
    id: "Q0",
    type: "text",
    title: "今回、何について診断しますか？",
    note: "未入力でもかまいません。",
    placeholder: "例：独立する、家を持つ、YouTubeを収益化する、FIREする",
    optional: true
  },

  {
    id: "T1",
    type: "duration",
    title: "この目標を持ったのは、どのくらい前ですか？"
  },
  {
    id: "T2",
    type: "duration",
    title: "この目標に向けて、実際に行動を始めたのは、どのくらい前ですか？",
    specials: [
      { label: "まだ具体的には始めていない", value: "not_started" }
    ]
  },
  {
    id: "T3",
    type: "duration",
    title: "この目標を持った当初、どのくらいで「ひとまず到達した」と言える状態になると思っていましたか？",
    specials: [
      { label: "特に期限は考えていなかった", value: "unset" }
    ]
  },
  {
    id: "T4",
    type: "duration",
    title: "今の感覚では、あとどのくらいでそこまで到達できそうですか？",
    specials: [
      { label: "すでに到達している", value: "already_reached" },
      { label: "見通しが立たない", value: "unknown" }
    ]
  },

  {
    id: "C1",
    type: "choice",
    title: "この目標について、現在の状態に最も近いものは？",
    options: [
      ["まだほとんど形になっていない", 0],
      ["準備や試行をしている段階", 25],
      ["一部は実現している", 50],
      ["かなり実現している", 75],
      ["ほぼ到達したと言える", 100]
    ]
  },
  {
    id: "C2",
    type: "choice",
    title: "この目標の実現に必要だと思うものは、現在どの程度揃っていますか？",
    note: "能力・経験・環境・資金・人脈・実績などを含みます。",
    options: [
      ["何が必要なのか、まだ十分に分からない", 0],
      ["ほとんど揃っていない", 25],
      ["一部は揃っている", 50],
      ["かなり揃っている", 75],
      ["ほぼ揃っている", 100]
    ]
  },
  {
    id: "C3",
    type: "choice",
    title: "この目標について、「目標に近づいた」と判断できる具体的な成果はどの程度ありますか？",
    options: [
      ["まだほとんどない", 0],
      ["小さな成果はある", 25],
      ["明確な成果がいくつかある", 50],
      ["かなり近づいたと言える成果がある", 75],
      ["目標の大部分を実現する成果がある", 100]
    ]
  },
  {
    id: "C4",
    type: "choice",
    title: "ここから目標に到達するまでに、何をすればよいか見えていますか？",
    options: [
      ["ほとんど分からない", 0],
      ["大まかな方向だけは分かる", 25],
      ["いくつか必要なことは分かっている", 50],
      ["かなり具体的に見えている", 75],
      ["到達までの道筋がほぼ見えている", 100]
    ]
  },
  {
    id: "C5",
    type: "choice",
    title: "目標到達までに残っている距離は、どの程度ありますか？",
    options: [
      ["ほとんど全部残っている", 0],
      ["まだかなり残っている", 25],
      ["半分程度は残っている", 50],
      ["あと少し", 75],
      ["ほぼ残っていない", 100]
    ]
  },

  {
    id: "E1",
    type: "choice",
    title: "この目標を持った当初、現在と同じだけ時間が経った時点では、どの段階まで進んでいると思っていましたか？",
    options: [
      ["まだほとんど形になっていないと思っていた", 0],
      ["準備や試行の段階だと思っていた", 25],
      ["一部は実現していると思っていた", 50],
      ["かなり実現していると思っていた", 75],
      ["ほぼ到達していると思っていた", 100],
      ["当時はそこまで考えていなかった", null]
    ]
  },
  {
    id: "E2",
  type: "choice",
  title: "この目標を持った当初、今ごろは、目標達成に必要な準備や条件がどの程度整っていると思っていましたか？",
  options: [
    ["まだほとんど整っていない想定だった", 0],
    ["一部は整っている想定だった", 25],
    ["半分程度は整っている想定だった", 50],
    ["かなり整っている想定だった", 75],
    ["ほぼ整っている想定だった", 100],
    ["当時はそこまで考えていなかった", null]
  ]
  },
  {
    id: "E3",
    type: "choice",
    title: "当初の想定では、今ごろ具体的な成果は、どの程度出ているはずでしたか？",
    options: [
      ["まだほとんどない想定だった", 0],
      ["小さな成果は出ている想定だった", 25],
      ["明確な成果がいくつか出ている想定だった", 50],
      ["かなり近づいたと言える成果が出ている想定だった", 75],
      ["目標の大部分を実現する成果が出ている想定だった", 100],
      ["当時はそこまで考えていなかった", null]
    ]
  },

  {
    id: "M1",
    type: "choice",
    title: "この目標は、最終的にどの程度実現できれば「達成した」と思えますか？",
    options: [
      ["一部でも実現すれば、達成したと思える", 0],
      ["半分程度実現すれば、達成したと思える", 25],
      ["大部分が実現すれば、達成したと思える", 50],
      ["ほぼすべて実現して、初めて達成したと思える", 75],
      ["思い描いた状態まで実現しないと、達成したとは思えない", 100]
    ]
  },
  {
  id: "M2",
  type: "choice",
  title: "目標自体は実現していても、最終的にたどり着いた形が、当初思い描いていたものと違っていた場合、どこまで受け入れられますか？",
  options: [
    ["大きく違っていても、目的が満たされれば受け入れられる", 0],
    ["かなり違っていても、重要な部分が残っていれば受け入れられる", 25],
    ["ある程度は思い描いた形に近くあってほしい", 50],
    ["かなり思い描いた形に近くないと受け入れにくい", 75],
    ["思い描いた形そのものであることが重要", 100]
  ]
},
  {
    id: "M3",
    type: "choice",
    title: "最終的な結果に届かなかったとしても、そこまでの経験や過程に十分な価値があれば納得できますか？",
    options: [
      ["十分納得できる", 0],
      ["かなり納得できる", 25],
      ["ある程度は納得できる", 50],
      ["結果が出なければ納得しにくい", 75],
      ["結果に到達しなければ意味を感じにくい", 100]
    ]
  },
  {
    id: "M4",
    type: "choice",
    title: "この目標が最終的に実現しなかった場合、その状態をどの程度受け入れられると思いますか？",
    options: [
      ["実現しなくても十分受け入れられる", 0],
      ["残念ではあるが受け入れられる", 25],
      ["かなり大きな心残りになる", 50],
      ["実現しない状態を受け入れるのは難しい", 75],
      ["実現して当然のものに近く、達しない状態は受け入れがたい", 100]
    ]
  },

  {
    id: "I1",
    type: "choice",
    title: "この目標が思い描いている通りに実現したとき、どの程度「十分に叶った」と感じると思いますか？",
    options: [
      ["十分に叶ったと感じる", 0],
      ["ほぼ十分だと感じる", 25],
      ["かなり満たされるが、少し物足りなさも残る", 50],
      ["達成しても、まだ足りないと感じる", 75],
      ["達成しても、本当に望んでいるところには届いていないと感じる", 100]
    ]
  },
  {
    id: "I2",
    type: "choice",
    title: "この目標を達成したあとについて、すでに「次にこうなりたい」というものがありますか？",
    options: [
      ["特にない。まずこの目標が一区切り", 0],
      ["達成したら、そのとき考えると思う", 25],
      ["なんとなく次の方向はある", 50],
      ["次に目指したい状態がかなり具体的にある", 75],
      ["今の目標は、最初から次の目標へ進むための一段階として考えている", 100]
    ]
  },
  {
    id: "I3",
    type: "choice",
    title: "お金・時間・能力・環境などの制約をいったん考えなくてよいとしたら、今の目標は変わりますか？",
    options: [
      ["ほとんど変わらない", 0],
      ["少しだけ大きくなる", 25],
      ["かなり大きくなる", 50],
      ["まったく違う規模になる", 75],
      ["今の目標とは別のものを望むと思う", 100]
    ]
  },
  {
    id: "I4",
    type: "choice",
    title: "この目標そのものが欲しいのか、それによって得られる別の状態が欲しいのか、どちらに近いですか？",
    options: [
      ["この目標そのものを実現したい", 0],
      ["ほぼ目標そのものが目的", 25],
      ["両方同じくらい", 50],
      ["その先に得られるものの方が重要", 75],
      ["この目標は、別の理想を実現するための手段に近い", 100]
    ]
  },

  {
    id: "P1",
    type: "choice",
    title: "この目標について、現在は前に進んでいる感覚がありますか？",
    options: [
      ["明らかに後退している", 0],
      ["ほぼ止まっている", 25],
      ["少しずつ進んでいる", 50],
      ["はっきり進んでいる", 75],
      ["想定以上の勢いで進んでいる", 100]
    ]
  },
  {
    id: "P2",
    type: "choice",
    title: "この目標に向けた行動は、現在どの程度続いていますか？",
    options: [
      ["ほとんど行動できていない", 0],
      ["ときどき行動する程度", 25],
      ["波はあるが続いている", 50],
      ["比較的安定して続いている", 75],
      ["日常の一部として継続している", 100]
    ]
  },
  {
    id: "P3",
    type: "choice",
    title: "今、次に何をすれば目標に近づけるか分かっていますか？",
    options: [
      ["何をすればいいか分からない", 0],
      ["方向だけはなんとなく分かる", 25],
      ["次にやることはいくつか分かっている", 50],
      ["次の行動がかなり具体的に決まっている", 75],
      ["その先まで含めて行動の流れが見えている", 100]
    ]
  },
  {
    id: "P4",
    type: "choice",
    title: "現在までの進み方は、あなたが想定していたペースと比べてどうですか？",
    options: [
      ["想定よりかなり遅い", -2],
      ["想定より少し遅い", -1],
      ["ほぼ想定したペース", 0],
      ["想定より少し早い", 1],
      ["想定よりかなり早い", 2],
      ["そもそもペースを想定していなかった", null]
    ]
  },

  {
    id: "L1",
    type: "choice",
    title: "この目標に向かう中で、自分の努力だけでは避けにくい事情に、進行を阻まれていると感じることはありますか？",
    options: [
      ["ほとんどない", 0],
      ["ときどきある", 20],
      ["ある程度ある", 40],
      ["邪魔が多いと感じる", 60],
      ["大きな障害に何度も阻まれてきた", 80],
      ["決定的な障害によって、大きく予定が変わったことがある", 100]
    ]
  },
  {
    id: "L2",
    type: "choice",
    title: "反対に、偶然や巡り合わせに助けられたと感じることはありますか？",
    options: [
      ["ほとんどない", 0],
      ["あまりない", 20],
      ["ときどきある", 40],
      ["運がいいと感じることがある", 60],
      ["幸運に助けられたと感じることが多い", 80],
      ["「これがなければ今の位置にはいなかった」と思う幸運があった", 100]
    ]
  },
  {
    id: "L3",
    type: "choice",
    title: "この目標を最終的に実現するには、自分の努力だけでなく「運や偶然」がどの程度必要だと思いますか？",
    options: [
      ["ほぼ自分の行動次第だと思う", 0],
      ["大部分は自分の行動で決まると思う", 20],
      ["運もある程度は必要だと思う", 40],
      ["運や巡り合わせがかなり重要だと思う", 60],
      ["大きなチャンスに恵まれることが必要だと思う", 80],
      ["自分ではコントロールできない要素が決定的だと思う", 100]
    ]
  }
];

const state = {
  index: 0,
  answers: {}
};

const app = document.getElementById("app");

function average(values) {
  const nums = values.filter(v => typeof v === "number" && !Number.isNaN(v));
  if (!nums.length) return null;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function render() {
  const q = questions[state.index];
  const progress = Math.round(((state.index + 1) / questions.length) * 100);

  let inputHtml = "";

  if (q.type === "text") {
    inputHtml = `
      <input
        class="text-input"
        id="textAnswer"
        type="text"
        maxlength="80"
        placeholder="${q.placeholder || ""}"
        value="${state.answers[q.id] || ""}"
      >
    `;
  }

  if (q.type === "duration") {
    const current = state.answers[q.id];
    const currentObject =
      current && typeof current === "object" ? current : null;

    inputHtml = `
      <div class="duration-row">
        <input
          class="number-input"
          id="durationAmount"
          type="number"
          min="1"
          inputmode="numeric"
          placeholder="数字"
          value="${currentObject ? currentObject.amount : ""}"
        >

        <select id="durationUnit">
          <option value="days" ${currentObject?.unit === "days" ? "selected" : ""}>日</option>
          <option value="months" ${!currentObject || currentObject?.unit === "months" ? "selected" : ""}>ヶ月</option>
          <option value="years" ${currentObject?.unit === "years" ? "selected" : ""}>年</option>
        </select>
      </div>
    `;

    if (q.specials) {
      inputHtml += `
        <div class="choice-list special-list">
          ${q.specials.map(s => `
            <button
              type="button"
              class="choice ${current === s.value ? "selected" : ""}"
              data-special="${s.value}"
            >
              ${s.label}
            </button>
          `).join("")}
        </div>
      `;
    }
  }

  if (q.type === "choice") {
    const answered = Object.prototype.hasOwnProperty.call(state.answers, q.id);

    inputHtml = `
      <div class="choice-list">
        ${q.options.map(([label, value], index) => {
          const selected =
            answered &&
            state.answers[q.id] === value;

          return `
            <button
              type="button"
              class="choice ${selected ? "selected" : ""}"
              data-choice="${index}"
            >
              ${label}
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  app.innerHTML = `
    <div class="progress-wrap">
      <div class="progress-info">
        <span>${state.index + 1} / ${questions.length}</span>
        <span>${progress}%</span>
      </div>
      <div class="progress-track">
        <div class="progress-bar" style="width:${progress}%"></div>
      </div>
    </div>

    <section class="question-card">
      <div class="question-id">${q.id}</div>
      <h1>${q.title}</h1>
      ${q.note ? `<p class="helper">${q.note}</p>` : ""}
      ${inputHtml}
      <p class="error" id="error"></p>
    </section>

    <div class="nav">
      ${
        state.index > 0
          ? `<button type="button" class="secondary" id="backBtn">戻る</button>`
          : `<span></span>`
      }

      <button type="button" id="nextBtn">
        ${state.index === questions.length - 1 ? "結果を見る" : "次へ"}
      </button>
    </div>
  `;

  bindEvents(q);
}

function bindEvents(q) {
  if (q.type === "text") {
    const input = document.getElementById("textAnswer");

    input.addEventListener("input", () => {
      state.answers[q.id] = input.value.trim();
    });
  }

  if (q.type === "choice") {
    document.querySelectorAll("[data-choice]").forEach(button => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.choice);
        state.answers[q.id] = q.options[index][1];
        render();
      });
    });
  }

  if (q.type === "duration") {
    const amount = document.getElementById("durationAmount");
    const unit = document.getElementById("durationUnit");

    function saveDuration() {
      if (amount.value && Number(amount.value) > 0) {
        state.answers[q.id] = {
          amount: Number(amount.value),
          unit: unit.value
        };
      }
    }

    amount.addEventListener("input", saveDuration);
    unit.addEventListener("change", saveDuration);

    document.querySelectorAll("[data-special]").forEach(button => {
      button.addEventListener("click", () => {
        state.answers[q.id] = button.dataset.special;
        render();
      });
    });
  }

  const back = document.getElementById("backBtn");

  if (back) {
    back.addEventListener("click", () => {
      state.index--;
      render();
    });
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    if (!isAnswered(q)) {
      document.getElementById("error").textContent =
        "回答を選択してください。";
      return;
    }

    if (state.index < questions.length - 1) {
      state.index++;
      render();
    } else {
      showPreliminaryResult();
    }
  });
}

function isAnswered(q) {
  if (q.optional) return true;

  const answer = state.answers[q.id];

  if (q.type === "duration") {
    if (typeof answer === "string") return true;

    return (
      answer &&
      typeof answer === "object" &&
      answer.amount > 0
    );
  }

  return Object.prototype.hasOwnProperty.call(state.answers, q.id);
}

function showPreliminaryResult() {
  const a = state.answers;

  const C = average([a.C1, a.C2, a.C3, a.C4, a.C5]);
  const E = average([a.E1, a.E2, a.E3]);
  const M = average([a.M1, a.M2, a.M3, a.M4]);
  const I = average([a.I1, a.I2, a.I3, a.I4]);
  const P = average([a.P1, a.P2, a.P3]);

  const flex = M === null ? null : 100 - M;

  const structural =
    C === null || I === null
      ? null
      : C * (1 - 0.2 * (I / 100));

  const wind =
    typeof a.L1 === "number" && typeof a.L2 === "number"
      ? 50 + (a.L2 - a.L1) / 2
      : null;

  const round = value =>
    value === null ? "―" : Math.round(value);

  app.innerHTML = `
    <section class="question-card">
      <div class="question-id">TEST RESULT</div>
      <h1>仮計算結果</h1>

      <p class="helper">
        まだ最終結果画面ではありません。質問データと基本計算が正常に動くかを見るための確認表示です。
      </p>

      <div class="test-result">
        <p>現在地 C：<strong>${round(C)}</strong></p>
        <p>当初期待 E：<strong>${round(E)}</strong></p>
        <p>達成要求 M：<strong>${round(M)}</strong></p>
        <p>理想拡張 I：<strong>${round(I)}</strong></p>
        <p>推進力：<strong>${round(P)}</strong></p>
        <p>妥協度：<strong>${round(flex)}</strong></p>
        <p>到達度：<strong>${round(structural)}</strong></p>
        <p>追い風度：<strong>${round(wind)}</strong></p>
      </div>

      <button type="button" id="restartBtn">最初から試す</button>
    </section>
  `;

  document.getElementById("restartBtn").addEventListener("click", () => {
    state.index = 0;
    state.answers = {};
    render();
  });
}

render();
