import { useEffect, useState } from "react";

import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import useSound from "use-sound";

import FanfareSfx from "../assets/sounds/fanfare.mp3";
import {
  IncreaseUsagiButton,
  DisplayUsagi,
} from "../components/increaseUsagiButton";
import { increment } from "../features/counter/counterSlice";
import { RootState } from "../store/store";

function Infomation() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button type="button" id="info" onClick={() => setOpen(!isOpen)}>
        v2
      </button>
      {isOpen && (
        <div id="credit">
          バージョン番号を再クリックで閉じる
          <hr />
          <h1>音設定</h1>
          <button type="button" id="mute_se">
            SEを消す（今プレイ中のみ）
          </button>
          <br />
          <button type="button" id="mute_bgm">
            BGMを消す（今プレイ中のみ）
          </button>
          <br />
          <button type="button" id="play_ko">
            コロブチカを流す
          </button>
          <br />
          <button type="button" id="play_ca">
            カルメン組曲を流す
          </button>
          <br />
          <button type="button" id="play_hi">
            交響曲を流す
          </button>
          <hr />
          <h1>設定</h1>
          <button type="button" id="del" style={{ fontSize: "100%" }}>
            データ消去（消えます）
          </button>
          <hr />
          <h1>ステータス</h1>
          <div id="status" />
          <hr />
          <h1>解除済実績一覧</h1>
          <div id="achievement_list" />
          <hr />
          <h1>クレジット</h1>
          <b>原案</b>：
          <a
            href="https://mastodon.cloud/@SugaryAlice"
            target="_blank"
            rel="noreferrer"
          >
            ありす
          </a>
          <br />
          <b>プログラム</b>：
          <a
            href="https://mastodon.cloud/@cs3"
            target="_blank"
            rel="noreferrer"
          >
            せせせ
          </a>
          <br />
          <b>画像</b>：
          <a href="http://www.irasutoya.com/" target="_blank" rel="noreferrer">
            いらすとや
          </a>
          , umezy12
          <br />
          <b>楽曲</b>：
          <a
            href="https://mastodon.cloud/@hc85f"
            target="_blank"
            rel="noreferrer"
          >
            HC
          </a>
          ,{" "}
          <a
            href="http://classical-sound.seesaa.net/"
            target="_blank"
            rel="noreferrer"
          >
            クラシック名曲サウンドライブラリー
          </a>
          <br />
          <b>効果音</b>：
          <a
            href="https://soundeffect-lab.info/"
            target="_blank"
            rel="noreferrer"
          >
            効果音ラボ
          </a>
          <br />
          <b>出演</b>：
          <a
            href="https://mastodon.cloud/@thethreegraces1"
            target="_blank"
            rel="noreferrer"
          >
            しまくま
          </a>
          ,{" "}
          <a
            href="https://mastodon.cloud/@njp2"
            target="_blank"
            rel="noreferrer"
          >
            FUBAR
          </a>
          ,{" "}
          <a
            href="https://mastodon.cloud/@awa"
            target="_blank"
            rel="noreferrer"
          >
            あじゃ
          </a>
          <br />
          <b>スペシャルサンクス</b>：
          <a href="https://mastodon.cloud" target="_blank" rel="noreferrer">
            mastodon.cloud
          </a>
          <br />
          (敬称略)
          <hr />
          <h1>更新履歴</h1>●○ でかい更新
          <br />
          ○● 細かい修正・バグ修正
          <br />
          ○● ver.1.1.1β コード修正 (2018.01.31)
          <br />
          ●○ ver.1.1β 実績削除 (2017.09.03)
          <br />
          ●○ ver.1β ステータス表示を実装,新実績を実装,その他細かい修正
          (2017.09.02)
          <br />
          ●○ ver.0.11.0β
          解除済実績の一覧表示を実装,新実績を実装,その他細かい修正
          (2017.09.01～)
          <br />
          ●○ ver.0.10.0β プレイ時間の測定を実装,新実績を実装,その他細かい修正
          <br />
          ●○ ver.0.9.0β 新実績を実装 (～2017.09.01)
          <br />
          ○● ver.0.8.1β 大漁が出ないバグを修正 (2017.08.30～)
          <br />
          ●○ ver.0.8.0β 音設定を実装
          <br />
          ○● ver.0.7.1β うさプリ救済措置の出現確率を調整
          <br />
          ●○ ver.0.7.0β うさプリBGM差し替え,救済措置を実装 (～2017.08.30)
          <br />
          ●○ ver.0.6.0β 設定を実装 (2017.08.25)
          <br />
          ●○ ver.0.5.0β バージョン番号とクレジット表示を実装 (2017.08.24～)
          <br />
          ●○ ver.0.4.0β うさプリを実装,うさプリ関連の実績を実装
          <br />
          ●○ ver.0.3.0β 鳥関連の実績を実装
          <br />
          ●○ ver.0.2.0β Twitterで共有ボタンを実装 (～2017.08.24)
          <br />
          ●○ ~ver.0.1.0β バージョン記録開始 (～2017.08.21)
        </div>
      )}
    </>
  );
}

// eslint-disable-next-line import/no-default-export
export default function Home() {
  const usagi = useSelector((state: RootState) => state.counter.usagi);
  const kuma = useSelector((state: RootState) => state.counter.kuma);
  const risu = useSelector((state: RootState) => state.counter.risu);
  const aja = useSelector((state: RootState) => state.counter.aja);
  const value = useSelector((state: RootState) => state.counter.value);
  const currentValue = value[value.length - 1];
  const [play] = useSound(FanfareSfx);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentValue?.type === "aja") {
      play();
    }
    if (usagi > 50) {
    }
    if (usagi % 2 === 0) {
      dispatch(increment());
      // ボタン数 + 1
      // ボタン位置を渡す
      // ボタンを表示できるようにする
      /*       const createButton = document.createElement("button");
      const newButtonId = redrawCount + 1;
      createButton.setAttribute("id", newButtonId.toString());
      const initialButton = document.getElementById("1");
      if (initialButton) {
        createButton.setAttribute(
          "style",
          `font-size:500%; position:fixed; top:${initialButton.offsetTop}px; left:${initialButton.offsetLeft}px;`
        );
      }
      createButton.innerHTML = "うさぎを増やす";
      document.body.appendChild(createButton);
      const newButton = document.getElementById(newButtonId.toString());
      if (newButton) {
        newButton.addEventListener("click", usafuya);
      }
      redrawCount += 1; */
    }
  }, [value, currentValue, play]);

  return (
    <>
      <Head>
        <title>うさぴょん</title>
      </Head>
      <div id="wrap">
        <span style={{ color: "red" }}>音が出ます</span>
        左下をクリックするといいことが起こります パソコンでのプレイを推奨
        <div id="usa" style={{ fontSize: "500%" }}>
          {usagi}匹のうさぎがいます
        </div>
        {kuma > 0 && (
          <div id="usa" style={{ fontSize: "500%" }}>
            {kuma}匹のくまがいます
          </div>
        )}
        {risu > 0 && (
          <div id="usa" style={{ fontSize: "500%" }}>
            {risu}匹のりすがいます
          </div>
        )}
        {aja > 0 && (
          <div id="usa" style={{ fontSize: "500%" }}>
            {aja}匹のあじゃがいます
          </div>
        )}
        <div>
          <IncreaseUsagiButton />
          <DisplayUsagi />
          {usagi > 100 && <IncreaseUsagiButton />}
          {/* TODO: うさぎ表示の上にうさぎ増やすボタンを置けるようにする */}
          {usagi > 1000 && (
            <img
              src="/images/tairyou.png"
              style={{ position: "fixed", bottom: "10px", right: "10px" }}
            />
          )}
          {/* TODO: 2000超えたら大漁再表示 */}
          {/* TODO: 大漁表示の際に音鳴らす */}
          {/* TODO: うさぎとボタンを配列にする？ */}
        </div>
        <button type="button" id="tori" style={{ fontSize: "100%" }}>
          Twitterで共有
        </button>
        <div id="version" />
        <Infomation />
        {/* TODO: ステータス表示する */}
        {/* TODO: 実績解除 */}
        {/* TODO: セーブ機能 */}
      </div>

        {/* TODO: 使わない音削除 */}
      <audio id="sound1" preload="auto">
        <source src="sound/carmen.mp3" type="audio/mp3" />
      </audio>
      <audio id="sound2" preload="auto">
        <source src="sound/usa.mp3" type="audio/mp3" />
      </audio>
      <audio id="sound3" preload="auto">
        <source src="sound/jupiter.mp3" type="audio/mp3" />
      </audio>
      <audio id="sound4" preload="auto">
        <source src="sound/alert.mp3" type="audio/mp3" />
      </audio>
      <audio id="sound5" preload="auto">
        <source src="sound/Коробейники.mp3" type="audio/mp3" />
      </audio>
      <audio id="sound6" preload="auto">
        <source src="sound/trumpet.mp3" type="audio/mp3" />
      </audio>
      <audio id="sound7" preload="auto">
        <source src="sound/dame.mp3" type="audio/mp3" />
      </audio>
      <audio id="sound8" preload="auto">
        <source src="sound/usapri.mp3" type="audio/mp3" />
      </audio>
    </>
  );
}
