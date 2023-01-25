
function gameOver() {

  //ボタンを押したときの音を出力する

  //画面移動する前にアニメーションを表示する

  //BGMを開始する
  //   //audioオブジェクトを生成する
  //   bgmSet("./sound/bgm01.mp3");

  //   //ファイルを作ってその場所とファイル名を書く
  //   bgmPlay();

  //ゲームを非表示にする
  ELM_area_game.style.display = "none";
  ELM_btn_reset.style.display = "none";


  //スタートボタン、ランキングを表示する
  ELM_area_start.style.display = "block";
  ELM_btn_start.style.display = "block";
  ELM_area_ranking.style.display = "block";
  showHighScore(high_scores);

  //ゲームオーバー画像を表示する
  // ELM_area_anime_d.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', ANM_IMG_D + "01.png");
  // ELM_area_anime_c.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', ANM_IMG_C + "01.png");
  // ELM_area_anime_b.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', ANM_IMG_B + "01.png");
  ELM_area_anime_a.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "./img/gameover.jpg");
  // ELM_img_main.src="./img/gameover.jpg";
  // ELM_img_main.style.display = "block";
  ELM_img_cp.src = "./img/cp01.jpg";
  ELM_img_me.src = "./img/me01.jpg";
}
