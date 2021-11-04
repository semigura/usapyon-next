import Head from "next/head";
import Image from "next/image";

function IncreaseRabbitButton() {
  return (
    <button id="1" style={{ fontSize: "500%" }}>
      うさぎを増やす
    </button>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>うさぴょん</title>
      </Head>
      <div id="loading">
        <div id="loader">
          <Image src="image/loading.gif" alt="Loading..." />
        </div>
      </div>
      <div id="wrap">
        <span style={{ color: "red" }}>音が出ます</span>
        左下をクリックするといいことが起こります パソコンでのプレイを推奨
        <div id="usa" style={{ fontSize: "500%" }}>
          0匹のうさぎがいます
        </div>
        <IncreaseRabbitButton />
        <button id="tori" style={{ fontSize: "100%" }}>
          Twitterで共有
        </button>
        <div id="version"></div>
        <div id="info"></div>
      </div>
      <div id="credit">
        バージョン番号を再クリックで閉じる
        <hr />
        <h1>音設定</h1>
        <button id="mute_se">SEを消す（今プレイ中のみ）</button>
        <br />
        <button id="mute_bgm">BGMを消す（今プレイ中のみ）</button>
        <br />
        <button id="play_ko">コロブチカを流す</button>
        <br />
        <button id="play_ca">カルメン組曲を流す</button>
        <br />
        <button id="play_hi">交響曲を流す</button>
        <hr />
        <h1>設定</h1>
        <button id="del" style={{fontSize: "100%"}}>
          データ消去（消えます）
        </button>
        <hr />
        <h1>ステータス</h1>
        <div id="status"></div>
        <hr />
        <h1>解除済実績一覧</h1>
        <div id="achievement_list"></div>
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
        <a href="https://mastodon.cloud/@cs3" target="_blank" rel="noreferrer">
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
        <a href="https://mastodon.cloud/@njp2" target="_blank" rel="noreferrer">
          FUBAR
        </a>
        ,{" "}
        <a href="https://mastodon.cloud/@awa" target="_blank" rel="noreferrer">
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
        ●○ ver.0.11.0β 解除済実績の一覧表示を実装,新実績を実装,その他細かい修正
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
