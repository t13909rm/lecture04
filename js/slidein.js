//3
var endSlideinFoxkeh = function(){
	//foxkehのスライドインが終わった際に、以下の関数を実行する。
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	//"#slidein-foxkeh img"のcssを実行する。
	foxkeh.setAttribute("class", "");
};
//上記のクラス属性のｃｓｓを無効にする。


//2
var startSlideinFoxkeh = function(){
	//Foxkehのスライドインが始まった際に、以下の関数を実行する。
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	//"#slidein-foxkeh img"のcssを実行する。
	foxkeh.setAttribute("class", "slidein");
//上記のクラス属性のcssをスライドインに変更する。

	foxkeh.addEventListener("animationend", endSlideinFoxkeh);
};
//アニメーションが終わった際に、Foxkehのスライドインを停止する。

//1.
var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//slidein-foxkeh buttonにクリックというイベントが実行されたら、foxkehのスライドインを実行する。


/*よって上記の一連の動作は、1、2、3の順で実行されるようになっている。