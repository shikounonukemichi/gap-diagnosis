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
  answers: {},
  started: false
};

const app = document.getElementById("app");

function average(values) {
  const nums = values.filter(v => typeof v === "number" && !Number.isNaN(v));
  if (!nums.length) return null;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function durationToDays(value) {
  if (!value || typeof value !== "object") return null;

  const amount = Number(value.amount);

  if (!amount || amount <= 0) return null;

  if (value.unit === "days") return amount;
  if (value.unit === "months") return amount * 30.44;
  if (value.unit === "years") return amount * 365.25;

  return null;
}

function weightedAverage(items) {
  const valid = items.filter(
    item =>
      typeof item.value === "number" &&
      !Number.isNaN(item.value)
  );

  if (!valid.length) return null;

  const weightSum = valid.reduce((sum, item) => sum + item.weight, 0);

  return valid.reduce(
    (sum, item) => sum + item.value * item.weight,
    0
  ) / weightSum;
}

function createRadarChart(items) {
  const size = 360;
  const center = 180;
  const radius = 105;
  const levels = [20, 40, 60, 80, 100];

 

  const point = (index, value, extra = 0) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / 5;
    const r = radius * (value / 100) + extra;

    return {
      x: center + Math.cos(angle) * r,
      y: center + Math.sin(angle) * r
    };
  };

  const grid = levels.map(level => {
    const points = items
      .map((_, index) => {
        const p = point(index, level);
        return `${p.x},${p.y}`;
      })
      .join(" ");

    return `<polygon class="radar-grid" points="${points}" />`;
  }).join("");

  const axes = items.map((_, index) => {
    const p = point(index, 100);

    return `
      <line
        class="radar-axis"
        x1="${center}"
        y1="${center}"
        x2="${p.x}"
        y2="${p.y}"
      />
    `;
  }).join("");

  const dataPoints = items.map((item, index) => {
    const value =
      typeof item.value === "number"
        ? Math.max(0, Math.min(100, item.value))
        : 0;

    const p = point(index, value);
    return `${p.x},${p.y}`;
  }).join(" ");

  const dots = items.map((item, index) => {
    const value =
      typeof item.value === "number"
        ? Math.max(0, Math.min(100, item.value))
        : 0;

    const p = point(index, value);

    return `
      <circle
        class="radar-dot"
        cx="${p.x}"
        cy="${p.y}"
        r="4"
      />
    `;
  }).join("");

  const labels = items.map((item, index) => {
    const p = point(index, 100, 38);

    const value =
      typeof item.value === "number"
        ? Math.round(item.value)
        : "―";

    return `
      <text
        class="radar-label"
        x="${p.x}"
        y="${p.y}"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        <tspan x="${p.x}" dy="-0.35em">${item.label}</tspan>
        <tspan x="${p.x}" dy="1.3em">${value}</tspan>
      </text>
    `;
  }).join("");

  return `
    <div class="radar-wrap">
      <svg
        class="radar-chart"
        viewBox="0 0 ${size} ${size}"
        role="img"
        aria-label="診断結果の五角形グラフ"
      >
        ${grid}
        ${axes}

        <polygon
          class="radar-data"
          points="${dataPoints}"
        />

        ${dots}
        ${labels}
      </svg>
    </div>
  `;
}

 function getResultProfile({
  structural,
  felt,
  gap,
  flex,
  P,
  wind,
  I,
  timeDeviationRate
}) {
  const perceptionGap =
    structural !== null && felt !== null
      ? felt - structural
      : 0;

  let type = "着実進行型";
  let description =
    "現在地と体感の差が比較的小さく、目標との関係に大きな偏りは見られません。";

  // 主タイプ判定
  if (perceptionGap <= -10) {
    type = "進んでいるのに遠い型";
    description =
      "実際の進捗以上に、まだ遠いと感じやすい状態です。期待とのズレや達成条件の厳しさ、逆風などが体感を押し下げています。";
  } else if (perceptionGap >= 8) {
    type = "まだ途中でも手応え型";
    description =
      "実際の現在地以上に、前進している手応えを感じやすい状態です。進み方への納得感や追い風が、体感を押し上げています。";
  } else if (P >= 70 && wind <= 30) {
    type = "逆風航行型";
    description =
      "自分自身はかなり動けていますが、外部からの逆風を強く受けている状態です。";
  } else if (P >= 70 && wind >= 70) {
    type = "追い風加速型";
    description =
      "自分の行動と外部からの追い風が、どちらも前向きに働いている状態です。";
  } else if (gap >= 65) {
    type = "想定ずれ型";
    description =
      "現在の進み方が、当初思い描いていた位置やペースから大きく外れています。";
  } else if (flex <= 25) {
    type = "完成形重視型";
    description =
      "ある程度の実現ではなく、思い描いた形にかなり近づくことを重視しています。";
  } else if (I >= 70) {
    type = "ゴールの先がある型";
    description =
      "現在の目標は最終地点ではなく、その先にさらに大きな理想が広がっています。";
  } else if (P <= 25) {
    type = "再始動待ち型";
    description =
      "現在地そのものより、今の行動や進行が止まり気味であることが大きく表れています。";
  }

  // 補助タグ
  const tags = [];

  if (typeof gap === "number") {
  if (gap >= 60) tags.push("想定より遅れ");
  if (gap <= 15) tags.push("ほぼ想定内");
}
  if (flex <= 25) tags.push("完成形重視");
  if (flex >= 75) tags.push("柔軟");

  if (P >= 75) tags.push("推進力高め");
  if (P <= 25) tags.push("推進力低め");

  if (wind <= 25) tags.push("強い逆風");
  if (wind >= 75) tags.push("強い追い風");

  if (I >= 70) tags.push("理想はさらに先");

  if (timeDeviationRate !== null) {
    if (timeDeviationRate >= 0.3) {
      tags.push("予定より長期化");
    } else if (timeDeviationRate <= -0.2) {
      tags.push("予定より前倒し");
    }
  }

  return {
    type,
    description,
    tags: tags.slice(0, 3)
  };
}

function getIndicatorComments({
  structural,
  signedGap,
  flex,
  P,
  wind
}) {
  let arrivalText = "";

  if (structural < 25) {
    arrivalText = "目標全体から見ると、まだ初期段階にあります。";
  } else if (structural < 50) {
    arrivalText = "目標の一部は形になっていますが、まだ残っている距離の方が大きい状態です。";
  } else if (structural < 75) {
    arrivalText = "目標の中盤から後半に入り、すでに相当部分が形になっています。";
  } else {
    arrivalText = "目標として設定した状態に、かなり近いところまで来ています。";
  }

  let gapText = "";

  if (signedGap === null) {
    gapText = "当初の想定が明確でないため、比較できる材料が限られています。";
  } else if (signedGap <= -0.25) {
    gapText = "当初の想定より、進み方は前倒しになっています。";
  } else if (signedGap <= 0.15) {
    gapText = "現在の位置やペースは、当初の想定から大きく外れていません。";
  } else if (signedGap <= 0.5) {
    gapText = "当初の想定より、やや遅れが生じています。";
  } else {
    gapText = "当初思い描いていた位置やペースとの間に、大きな差があります。";
  }

  let flexText = "";

  if (flex < 25) {
    flexText = "達成と認める条件がかなり明確で、完成形へのこだわりが強い傾向です。";
  } else if (flex < 50) {
    flexText = "多少の違いは許容できますが、理想に近い形での実現を重視しています。";
  } else if (flex < 75) {
    flexText = "結果と過程の両方を見ながら、ある程度柔軟に達成を判断できます。";
  } else {
    flexText = "当初の形にこだわりすぎず、目的が満たされれば達成として受け入れやすい傾向です。";
  }

  let propulsionText = "";

  if (P < 25) {
    propulsionText = "現在は行動や進行がかなり弱く、目標への動きが止まり気味です。";
  } else if (P < 50) {
    propulsionText = "動きはありますが、継続性や次の一手にはまだ不安定さがあります。";
  } else if (P < 75) {
    propulsionText = "目標に向けた行動が続いており、前進する力は維持されています。";
  } else {
    propulsionText = "行動・継続・次の一手が揃っており、現在の推進力はかなり強い状態です。";
  }

  let windText = "";

  if (wind < 25) {
    windText = "努力とは別の外部要因から、かなり強い逆風を受けている状態です。";
  } else if (wind < 45) {
    windText = "どちらかといえば、外部環境は逆風寄りです。";
  } else if (wind <= 55) {
    windText = "幸運と障害はおおむね均衡しており、外部要因はほぼ中立です。";
  } else if (wind < 75) {
    windText = "外部環境には、やや追い風が働いています。";
  } else {
    windText = "偶然や巡り合わせが、かなり強い追い風として働いています。";
  }

  return [
    {
      label: "到達度",
      value: structural,
      text: arrivalText
    },
    {
      label: "想定との差",
      value:
        signedGap === null
          ? null
          : clamp(signedGap * 100, 0, 100),
      text: gapText
    },
    {
      label: "妥協度",
      value: flex,
      text: flexText
    },
    {
      label: "推進力",
      value: P,
      text: propulsionText
    },
    {
      label: "追い風度",
      value: wind,
      text: windText
    }
  ];
}


function formatDuration(answer, prefix = "") {
  if (answer === "not_started") {
    return "まだ具体的には始めていない";
  }

  if (answer === "unset") {
    return "特に期限を決めていなかった";
  }

  if (answer === "already_reached") {
    return "すでに到達している";
  }

  if (answer === "unknown") {
    return "見通しが立っていない";
  }

  if (!answer || typeof answer !== "object") {
    return "―";
  }

  const amount = answer.amount;

  let unit = "";

  if (answer.unit === "days") unit = "日";
  if (answer.unit === "months") unit = "ヶ月";
  if (answer.unit === "years") unit = "年";

  return `${prefix}${amount}${unit}`;
}

function getPerceptionInsight({
  structural,
  felt,
  signedGap,
  M,
  L1,
  L2,
  L3
}) {
  if (structural === null || felt === null) {
    return {
      headline: "現在地と体感の差は算出できませんでした。",
      body: ""
    };
  }

  const diff = felt - structural;

  let headline = "";

  if (diff <= -12) {
    headline = "進んではいる。でも、あなたの中ではまだ遠い。";
  } else if (diff <= -4) {
    headline = "実際の現在地より、体感は少し厳しめです。";
  } else if (diff < 4) {
    headline = "現在地と、あなたの実感はほぼ一致しています。";
  } else if (diff < 12) {
    headline = "現在地以上に、前進の手応えを感じています。";
  } else {
    headline = "まだ途中でも、あなたの中ではかなり前に進んでいます。";
  }

  const downReasons = [];
  const upReasons = [];

  // 当初想定との差
  if (typeof signedGap === "number") {
    if (signedGap >= 0.25) {
      downReasons.push("当初思い描いていたペースとのズレ");
    } else if (signedGap <= -0.25) {
      upReasons.push("想定より前倒しで進んでいる感覚");
    }
  }

  // 達成条件
  if (typeof M === "number") {
    if (M >= 65) {
      downReasons.push("「ここまで来なければ達成ではない」という基準の高さ");
    } else if (M <= 35) {
      upReasons.push("達成の形を柔軟に受け入れられること");
    }
  }

  // 外部要因
  if (
    typeof L1 === "number" &&
    typeof L2 === "number" &&
    typeof L3 === "number"
  ) {
    const balance = (L2 - L1) / 100;
    const impact = 0.10 + 0.10 * (L3 / 100);
    const luckEffect = balance * impact;

    if (luckEffect <= -0.04) {
      downReasons.push("自分では動かしにくい逆風");
    } else if (luckEffect >= 0.04) {
      upReasons.push("偶然や巡り合わせによる追い風");
    }
  }

  let body = "";

  if (diff <= -4) {
    if (downReasons.length) {
      body =
        `回答を見ると、${downReasons.join("、")}が、` +
        "現在地そのものよりも「まだ足りない」という感覚を強くしています。";
    } else {
      body =
        "回答上では、実際の進捗に比べて、自分自身の評価の方がやや厳しくなっています。";
    }
  } else if (diff >= 4) {
    if (upReasons.length) {
      body =
        `回答を見ると、${upReasons.join("、")}が、` +
        "現在地以上の手応えにつながっています。";
    } else {
      body =
        "回答上では、現在地そのもの以上に、前進している実感を持てています。";
    }
  } else {
    body =
      "進捗の状態と、それをあなた自身がどう感じているかに、大きなズレはありません。";
  }

  return {
    headline,
    body
  };
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderStartScreen() {
  app.innerHTML = `
    <section class="start-screen">

      <div class="start-brand">
        <img
          src="kurage.png"
          alt=""
          class="start-kurage"
        >
        <div class="brand-text">思考の抜け道</div>
      </div>

      <div class="start-hero">
  <div class="start-label">
    VISUALIZE YOUR GAP
  </div>

  <h1 class="start-title">
    理想・目標<br>
    到達度診断
  </h1>
</div>

      <p class="start-lead">
        その目標、本当はどこまで進んでいるのでしょうか。
      </p>

      <p class="start-description">
        現在地・当初の想定・達成条件・推進力・外部環境を分解し、
        あなたの「足りない」を可視化します。
      </p>

      <p class="start-caution">
        ※良い・悪いを判定する診断ではありません。
      </p>

      <div class="start-concept">
        <span>この診断で比べるもの</span>

        <strong>
          推定到達度
          <span class="concept-cross">×</span>
          体感到達度
        </strong>

        <p>
          回答から推定した現在地と、
          自分が感じている現在地のズレを見ます。
        </p>
      </div>

      <div class="start-meta">
        <span>全 ${questions.length} 項目</span>
        <span>選択式中心</span>
        <span>5軸で可視化</span>
      </div>

      <button
        type="button"
        id="startBtn"
        class="start-button"
      >
        診断をはじめる
      </button>

      <p class="start-footer">
        意識を解き明かすYouTubeチャンネル<br>
        <strong>思考の抜け道</strong>
      </p>

    </section>
  `;

  document
    .getElementById("startBtn")
    .addEventListener("click", () => {
      state.started = true;
      state.index = 0;
      state.answers = {};
      render();
    });
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

  // --------------------
  // 基本指標
  // --------------------

  const C = average([a.C1, a.C2, a.C3, a.C4, a.C5]);
  const E = average([a.E1, a.E2, a.E3]);
  const M = average([a.M1, a.M2, a.M3, a.M4]);
  const I = average([a.I1, a.I2, a.I3, a.I4]);
  const P = average([a.P1, a.P2, a.P3]);

  const flex =
    M === null
      ? null
      : 100 - M;

  // 理想の広がりによる補正は最大20%
  const structural =
    C === null || I === null
      ? null
      : C * (1 - 0.2 * (I / 100));

  // --------------------
  // 時間計算
  // --------------------

  const elapsed = durationToDays(a.T1);
  const originalPlan = durationToDays(a.T3);
  const remaining = durationToDays(a.T4);

  let forecastTotal = null;
  let timeDeviationRate = null;

  if (
    elapsed !== null &&
    remaining !== null
  ) {
    forecastTotal = elapsed + remaining;
  }

  if (
    forecastTotal !== null &&
    originalPlan !== null &&
    originalPlan > 0
  ) {
    timeDeviationRate =
      (forecastTotal - originalPlan) / originalPlan;
  }

  // --------------------
  // 想定との差
  // 正：想定より遅い
  // 負：想定より早い
  // --------------------

  let expectationSigned = null;

  if (C !== null && E !== null) {
    expectationSigned =
      clamp((E - C) / 50, -1, 1);
  }

  let timeSigned = null;

  if (timeDeviationRate !== null) {
    timeSigned =
      clamp(timeDeviationRate, -1, 1);
  }

  let paceSigned = null;

  if (typeof a.P4 === "number") {
    // P4:
    // -2 = かなり遅い
    // -1 = 少し遅い
    //  0 = 想定通り
    // +1 = 少し早い
    // +2 = かなり早い

    paceSigned = -(a.P4 / 2);
  }

  const signedGap = weightedAverage([
    { value: expectationSigned, weight: 0.5 },
    { value: timeSigned, weight: 0.3 },
    { value: paceSigned, weight: 0.2 }
  ]);

  // レーダー表示用
  // 想定以上・想定通りなら0
  // 遅れるほど100へ
  const gap =
    signedGap === null
      ? null
      : clamp(signedGap * 100, 0, 100);

  // --------------------
  // 追い風度
  // --------------------

  const wind =
    typeof a.L1 === "number" &&
    typeof a.L2 === "number"
      ? clamp(
          50 + (a.L2 - a.L1) / 2,
          0,
          100
        )
      : null;

  // --------------------
  // 体感到達度
  // --------------------

  // 1. 想定とのズレ
  // 最大 ±15%
  const expectationFactor =
    signedGap === null
      ? 1
      : 1 - 0.15 * signedGap;

  // 2. 達成要求
  // 柔軟なら最大 +10%
  // 厳しければ最大 -10%
  const requirementFactor =
    M === null
      ? 1
      : 1 + 0.10 * ((50 - M) / 50);

  // 3. 運・外部要因
  let luckFactor = 1;

  if (
    typeof a.L1 === "number" &&
    typeof a.L2 === "number" &&
    typeof a.L3 === "number"
  ) {
    const balance =
      (a.L2 - a.L1) / 100;

    // 運が重要だと思うほど
    // 追い風・逆風が心理に強く効く
    const impact =
      0.10 + 0.10 * (a.L3 / 100);

    luckFactor =
      1 + balance * impact;
  }

  const felt =
    structural === null
      ? null
      : clamp(
          structural *
          expectationFactor *
          requirementFactor *
          luckFactor,
          0,
          100
        );

  const perceptionGap =
    structural !== null && felt !== null
      ? felt - structural
      : null;

  // --------------------
  // 表示用
  // --------------------

const radarSvg = createRadarChart([
  { label: "到達度", value: structural },
  { label: "想定との差", value: gap },
  { label: "妥協度", value: flex },
  { label: "推進力", value: P },
  { label: "追い風度", value: wind }
]);

  const profile = getResultProfile({
  structural,
  felt,
  gap,
  flex,
  P,
  wind,
  I,
  timeDeviationRate
});

const targetName =
  typeof a.Q0 === "string" && a.Q0.trim()
    ? escapeHtml(a.Q0.trim())
    : "今回の目標";
  const indicatorComments = getIndicatorComments({
  structural,
  signedGap,
  flex,
  P,
  wind
});

const perceptionInsight = getPerceptionInsight({
  structural,
  felt,
  signedGap,
  M,
  L1: a.L1,
  L2: a.L2,
  L3: a.L3
});
  
let timeComment = "";

if (timeDeviationRate === null) {
  if (a.T3 === "unset") {
    timeComment =
      "当初から期限を決めていなかったため、予定との時間差は算出していません。";
  } else if (a.T4 === "unknown") {
    timeComment =
      "現在の到達時期が見通せないため、当初の予定との時間差は算出できません。";
  } else if (a.T4 === "already_reached") {
    timeComment =
      "すでに到達しています。到達した時期を尋ねていないため、実際にかかった期間との比較は行っていません。";
  } else {
    timeComment =
      "時間については、比較に必要な情報が十分にありません。";
  }
} else if (timeDeviationRate >= 0.5) {
  timeComment =
    "現在の見込みでは、到達までの期間は当初の想定よりかなり長くなっています。";
} else if (timeDeviationRate >= 0.15) {
  timeComment =
    "現在の見込みでは、到達までの期間は当初の想定よりやや長くなっています。";
} else if (timeDeviationRate <= -0.2) {
  timeComment =
    "現在の見込みでは、当初の想定より早く到達するペースです。";
} else {
  timeComment =
    "到達までの時間は、おおむね当初想定していた範囲に収まっています。";
}
  
  const round = value =>
    value === null
      ? "―"
      : Math.round(value);

  const percentSigned = value => {
    if (value === null) return "―";

    const p = Math.round(value * 100);

    if (p > 0) return `+${p}%`;
    return `${p}%`;
  };

  app.innerHTML = `
  <section class="question-card result-screen">

    <div class="question-id">DIAGNOSIS RESULT</div>

<h1 class="result-title">理想・目標到達度診断</h1>

<p class="result-target">
  「${targetName}」
</p>

    <div class="felt-score">
      <span>体感到達度</span>
      <strong>${round(felt)}%</strong>
    </div>

    <p class="structural-score">
      推定到達度
      <strong>${round(structural)}%</strong>
    </p>

<div class="perception-box">
  <h2>${perceptionInsight.headline}</h2>

  <p>${perceptionInsight.body}</p>

  <div class="perception-numbers">
    <span>
      推定
      <strong>${round(structural)}%</strong>
    </span>

    <span class="perception-arrow">→</span>

    <span>
      体感
      <strong>${round(felt)}%</strong>
    </span>
  </div>
</div>

    <div class="type-box">
      <div class="type-label">あなたの現在地</div>
      <h1>${profile.type}</h1>
      <p>${profile.description}</p>

      <div class="tag-list">
        ${profile.tags.map(tag =>
          `<span class="result-tag">#${tag}</span>`
        ).join("")}
      </div>
    </div>

    <div class="radar-heading">
  <h2>目標との関係を5つの軸で見る</h2>
  <p>
    このグラフは「高いほど良い」という評価ではなく、
    今のあなたと目標との関係の形を表しています。
  </p>
</div>

${radarSvg}

<div class="result-values">
      <div>
        <span>到達度</span>
        <strong>${round(structural)}</strong>
      </div>

      <div>
        <span>想定との差</span>
        <strong>${round(gap)}</strong>
      </div>

      <div>
        <span>妥協度</span>
        <strong>${round(flex)}</strong>
      </div>

      <div>
        <span>推進力</span>
        <strong>${round(P)}</strong>
      </div>

      <div>
        <span>追い風度</span>
        <strong>${round(wind)}</strong>
      </div>
    </div>

<div class="analysis-section">
  <h2>5つの指標から見る現在地</h2>

  <div class="indicator-list">
    ${indicatorComments.map(item => `
      <div class="indicator-item">
        <div class="indicator-head">
          <strong>${item.label}</strong>
          <span>
            ${item.value === null ? "―" : Math.round(item.value)}
          </span>
        </div>

        <p>${item.text}</p>
      </div>
    `).join("")}
  </div>
</div>

<div class="analysis-section time-section">
  <h2>時間軸</h2>

  <div class="time-grid">
    <div>
      <span>目標を持ってから</span>
      <strong>${formatDuration(a.T1)}</strong>
    </div>

    <div>
      <span>行動を始めてから</span>
      <strong>${formatDuration(a.T2)}</strong>
    </div>

    <div>
      <span>当初の到達予定</span>
      <strong>${formatDuration(a.T3)}</strong>
    </div>

    <div>
      <span>現在の残り見込み</span>
      <strong>${formatDuration(a.T4, "あと")}</strong>
    </div>
  </div>

  <p class="time-comment">
    ${timeComment}
  </p>

  ${
    timeDeviationRate !== null
      ? `
        <p class="time-gap">
          当初想定との時間差
          <strong>${percentSigned(timeDeviationRate)}</strong>
        </p>
      `
      : ""
  }
</div>

    

    <button type="button" id="restartBtn">
      もう一度診断する
    </button>

  </section>
`;

  document
  .getElementById("restartBtn")
  .addEventListener("click", () => {
    state.index = 0;
    state.answers = {};
    state.started = false;
    renderStartScreen();
  });
}

renderStartScreen();
