var Color = ["Red","Cyan","Blue","Purple","Lime","Magenta","Navy","Silver","Orange","Olive"];
var CColor = {
	"Red":"红色",
}
var DB = ["擎天柱","空城计","救世主","丑八怪","美人计","里程碑","败家子","打擂台","清一色",
"守财奴","破天荒","莫须有","急先锋","吝啬鬼","口头禅","太上皇","紧箍咒","肉中刺","铁公鸡",
"母夜叉","忘年交","单相思","清君侧","跑龙套","执牛耳","笑面虎","东道主","试金石","敲竹杠",
"掉书袋","一言堂","替罪羊","狗腿子","下马威","二流子","一字师","一窝蜂","阿堵物","二把刀",
"土包子","马前卒","安乐窝","二杆子","风马牛","多面手","露马脚","耳边风","敲边鼓","儿皇帝",
"随大流","遮羞布","老江湖","满天飞","鸟兽散","冒失鬼","泼冷水","丧门神","一溜烟","乱弹琴",
"捋虎须","走过场","实打实","打边鼓","杵臼交","死对头","碰钉子","傲霜枝","耍花腔","杀风景",
"唱高调","软骨头","耳报神","一团糟","一风吹","耳旁风","杯中物","刮地皮","实心眼","冒牌货",
"放冷箭","抱不平","卷铺盖","一掊土","叫化子","石尤风","老夫子","百世师","东家丘","抹稀泥",
"虎而冠","装门面","白费蜡","东窗计","二五耦","赶浪头","一牛鸣","打死虎","金蝉脱壳","百里挑一",
"金玉满堂","背水一战","霸王别姬","天上人间","不吐不快","情非得已","满腹经纶","兵临城下",
"黄道吉日","偷天换日","两小无猜","卧虎藏龙","珠光宝气","簪缨世族","金玉良缘","掌上明珠",
"皆大欢喜","逍遥法外","生财有道","极乐世界","情不自禁","愚公移山","龙生九子","精卫填海",
"海市蜃楼","壮志凌云","四海一家","穿针引线","走后门","吹鼓","现世报","现时报","现成饭",
"拖油瓶","拖后腿","使绊子","丧气鬼","丧门","软耳朵","软钉","护身符","花脚猫","冷板凳",
"纸老虎","穷折腾","穷光蛋","穷措大","免战牌","驴肝肺","两面光","连珠炮","连理门","连锅端",
"冷热病","软刀子","泡蘑菇","肥皂泡","放空气","放空炮","定心丸","钓鳌客","炒鱿鱼","炒冷饭",
"表面光","抱佛脚","饱眼福","绊脚石","狗吃屎","狗咬狗","和事老","泡病","拍胸脯","拍马屁",
"怕死鬼","泥饭碗","命根子","拉皮条","金石交","佼佼者","和稀泥","狐狸精","咬耳朵","走马灯",
"风月场","母老虎","节骨眼","两边倒","对不起","打光棍","出洋相","出头鸟","出气筒","出风头",
"白日梦","自留地","生力军","四不像","台柱子","方外人","方寸地","方便门","车轮战","长舌妇",
"不倒翁","比翼鸟","左右手","主心骨","主人翁","印把子","自己人","有心人","老皇历","老古董",
"老古板","扣帽子","扛大梁","军令状","交际花","合家欢","地头蛇","吃白食","并蒂莲","老黄牛",
"老来俏","老油条","压轴戏","压岁钱","吸血鬼","死心眼","死脑筋","死胡同","杀威棒","扫帚星",
"肉搏战","全家福","老油子","百里才","掘墓人","跑单帮","落汤鸡","落水狗","揪辫子","街溜子",
"喝倒彩","短平快","照妖镜","意中人","摇钱树","煞风景","翘辫子","翘尾巴","烂摊子","寄生虫",
"鸿门宴","唱反调","装洋蒜","装孙子","硬骨头","窝囊气","窝囊废","窝里反","温柔乡","替死鬼",
"塞狗洞","群言堂","暴发户","激将法","避风港","壁上观","孺子牛","打屁股","擦边球","麒麟阁",
"嚼舌头","灌米汤","糊涂虫","糊涂账","不吐不快","海阔天空","情非得已","满腹经纶","兵临城下",
"春暖花开","插翅难逃","黄道吉日","天下无双","偷天换日","两小无猜","卧虎藏龙","珠光宝气",
"簪缨世族","花花公子","绘声绘影","国色天香","相亲相爱","八仙过海","金玉良缘","掌上明珠",
"皆大欢喜","逍遥法外"];
var DB2 = ["sincere","mood","static","senator","hobby","lad","equip","frown","fasten","software",
		"stir","distribution","flexible","solution","panel","ministry","supreme","describe","limb",
		"circumstance","core","assistant","mess","minus","statistic","pregnant","sector","detection",
		"statue","bride","cycle","saucer","skillful","civilization","overhead","clash","grant","bond",
		"staff","intermediate","guitar","comprehensive","presence","appliance","cushion","emergency",
		"solve","label","slim","status","steady","include","resistance","prime","ambassador","derive",
		"sponsor","proportion","mental","punch","result","client","steamer","option","dormitory",
		"attitude","steep","agency","steer","scandal","definite","cautious","prayer","nest","domestic",
		"chest","airline","rebel","satisfactory","stem","render","object","gardener","shrink","parade",
		"rumour","rug","exploit","ash","rope","bulk","strengthen","independent","board","recall","studio",
		"grave","formal","absorb","sensitive","ability","fairy","talent","comparison","stuff","brow",
		"infer","invasion","grand","stress","journalist","supply","penetrate","subject","pole",
		"raw","embassy","carpenter","appropriate","socialist","protein","enlarge","inherit","chemist",
		"conflict","drain","architecture","charity","entitle","subsequent","span","instruct","spite",
		"slender","automobile","behavior","envy","substance","contest","spit","mutual","dorm","substantial",
		"meanwhile","desire","conviction","interaction","menu","frustrate","belief","confusion","civilize",
		"preface","chemical","horizontal","invitation","auto","electric","purse","blank","courtyard",
		"rural","discourage","reflection","rainbow","slide","removal","missing","graph","fortnight",
		"disgust","offense","proportional","devote","empire","microphone","subtract","gesture",
		"loop","sheer","cupboard","sore","raid","lower","comment","distress","publicity","spin",
		"museum","outstanding","rack","rent","housing","complain","evidently","deny","ownership",
		"rid","harness","acknowledge","passion","genuine","imaginary","prompt","invention","confidence",
		"suburb","industrialize","fearful","intelligence","childhood","crush","intention","finding"
		];
DB2 = DB.concat(DB2);
var len = DB.length;
var flag = [];

var level0 = "";
var count = 0;
var verified = false;
var time_id1 = null;
var time_id2 = null;

//##########Functional Module################
function clearTime(){
	if (time_id1) clearTimeout(time_id1);
	if (time_id2) clearTimeout(time_id2);
	time_id1 = null;
	time_id2 = null;
}

function backToMenu(){
	clearTime();
	$(".Main").addClass("hide");
	$("#gameBody").addClass("hide");
	$("#answer").addClass("hide");
	$(".entrance").show();
	removeBlocks();
	removeVerify();
}
function backToGame(){
	count = 0;
	flag = [];
	$(".entrance").hide();
	$(".details").show();
	$(".Main").removeClass('hide');
	level0 = $(this).attr("id");
}
function gameStart(){
	verified = true;
	removeBlocks();
	removeVerify();
	$(".details").hide("slow");
	$("#gameBody").removeClass("hide")
	$("#gameBody").fadeIn("fast");
	if (level0 == "easy") tryEasy()
	else if (level0 == "hard") tryHard()
	else if (level0 == "exnm") tryExnm()
}

function addColorBlocks (color, callback) {
	var data_tmp = {}, color_tmp= {};
	if (color == "homo"){
		for (var i = 0; i < count; i++){
			flag[i] = {color:"",data:"",index:""};

			flag[i].index = i;

			do{
				flag[i].color =  Color[Math.floor(Math.random()*10)];
			}while(color_tmp[flag[i].color]);
			color_tmp[flag[i].color] = 1;

			do{
				flag[i].data =  DB[Math.floor(Math.random()*299)];
			}while(data_tmp[flag[i].data]);
			data_tmp[flag[i].data] = 1;

			var option = 
				'<div style="color:'+ flag[i].color +';width:17%;display:inline-block;font-size:1.5em;font-style:bold;padding:1em;border:2px black solid">';
			$("#block").append(option + flag[i].color +'</div>');
		}
	}
	else if (color == "hexo"){
		for (var i = 0; i < count; i++){
			flag[i] = {color:"",data:"",index:""};
			
			flag[i].index = i;
			do{
				flag[i].color =  Color[Math.floor(Math.random()*10)];
			}while(color_tmp[flag[i].color]);
			color_tmp[flag[i].color] = 1;

			do{
				flag[i].data =  DB2[Math.floor(Math.random()*200)+210];
			}while(data_tmp[flag[i].data]);
			data_tmp[flag[i].data] = 1;

			var option = 
				'<div style="color:'+ flag[i].color +';width:17%;display:inline-block;font-size:1.5em;font-style:bold;padding:1em;border:2px black solid">';
			$("#block").append(option + flag[i].color +'</div>');
		}
	}
	callback();
}

function addBlocks (color, callback) {
	if (!color){
		flag = [];
		for (var i = 0; i < count; i++){
			flag[i] =  DB[Math.floor(Math.random()*299)]
			var option = 
				'<div style="width:17%;display:inline-block;font-size:1.5em;padding:1em;border:2px black solid">';
			$("#block").append(option + flag[i] +'</div>');
		}
	}

	else if (color){
		flag.sort(function(){return Math.random()>0.5?-1:1;});
		for (var i = 0; i < count; i++){
			var option = 
				'<div style="color:'+ flag[i].color +';width:17%;display:inline-block;font-size:1.5em;font-style:bold;padding:1em;border:2px black solid">';
			$("#block").append(option + flag[i].data +'</div>');
		}
		flag.forEach(function(data){console.log(data.color+" "+data.data)});
	}

	callback();
}

function removeBlocks(){
	$("#block").empty();
}

function addVerify (color) {
	for (var i = 0; i < count; i++){
		var option = 
			'<input class="answerBox" id="answerBox'+ i +
			'" style="width:15%;display:inline-block;font-size:1.5em;padding:1em;border:2px black solid" />';
			$("#answer").append(option);
		}
	var tmp = null
	if (!color)
	tmp = '<br/><br/><br/><br/><button onclick="verifyIt()" type="button" id="submit" class="btn btn-default btn-lg btn-block" >SUBMIT</button>';
	else {
	tmp = '<br/><br/><br/><br/><button onclick="verifyIt(\''+color+'\')" type="button" id="submit" class="btn btn-default btn-lg btn-block" >SUBMIT</button>';
	}
	$("#answer").append(tmp);
	$("#answer").removeClass("hide")
}

function removeVerify () {
	$("#answer").empty();
}

function verifyIt(color){
	if (!color) {
		$(".answerBox").each(function(){
		if(flag[$(this).attr("id").charAt(9)] != $(this).val()){
			removeBlocks();
			removeVerify();
			return (verified = false);
		}
		})
		removeBlocks();
		removeVerify();
		tryEasy();
	}
	else if (color){
		$(".answerBox").each(function(){
		console.log(flag[flag[$(this).attr("id").charAt(9)].index].data);
		if(flag[flag[$(this).attr("id").charAt(9)].index].data != $(this).val()){
			removeBlocks();
			removeVerify();
			return (verified = false);
		}
		})
		removeBlocks();
		removeVerify();
		if (color == "homo") tryHard();
		else if(color == "hexo") tryExnm();
	}
}

$(document).ready(function(){

	$(".level0").click(backToGame);

	$("#reset").click(backToMenu);

	$("#start").click(gameStart);

})
//#####################End of Functional Module


//##################GAME START!################
function easyEn(){
	$("#level0").html("&nbsp;&nbsp;EASY");
	$("#content").html(
		"游戏进行时会出现一组方框，每个方框内包含一个词组，每个s词组有4秒时间记忆，然后会在相同位置出现第二组空白方框，此时玩家需要按照词组出现的先后顺序依次写出对应位置的汉字。游戏共有十关，每关将增加一个词组");
}

function hardEn(){
	$("#level0").html("&nbsp;&nbsp;HARD");
	$("#content").html(
		"与简单模式相比，困难模式会出现两组方框，先是颜色，然后是需要记忆的词组。玩家需要按照颜色出现的先后顺序依次写出与颜色相同的汉字。游戏共有十关，每关将增加一个词组");
}

function exnmEn(){
	$("#level0").html("&nbsp;&nbsp;NIGHTMARE");
	$("#content").html(
		"与简单模式相比，极难模式会出现两组方框，先是颜色，然后是需要记忆的词组。玩家需要按照颜色出现的先后顺序依次写出与颜色相同的汉字与<mark>四级单词</mark>。游戏共有十关，每关将增加一个词组");
}
//################End of GAME START#############



//################GAME BODY#####################
function tryEasy (){
	if (verified&&count < 10){
		count ++;
		if (count == 10) alert("Final Test!");
		$("#level1").text("Level" + count);
		$("#level1").fadeIn();
		addBlocks(null, function(){
			time_id1 = setTimeout("removeBlocks();addVerify();", count*4000);
		})
	}
	else if (!verified){
			alert("Don't lose your mind!\nTry AGAIN!");
			backToMenu();
			}
	else	{
			if (verified) {
				alert("Congratulations!\nWhy not try harder?");
				backToMenu();
			}
	}
}

function tryHard(){
	if (verified&&count < 10){
		count ++;
		if (count == 10) alert("Final Test!");
		$("#level1").text("Level" + count);
		$("#level1").fadeIn();
		addColorBlocks("homo", function(){
			time_id2 = setTimeout(function(){
				removeBlocks();
				addBlocks("homo" ,function(){
					time_id1 = setTimeout("removeBlocks();addVerify('homo');", count*4000);
				})
			}
			, count*4000);
		})
	}
	else if (!verified){
			alert("Don't lose your mind!\nTry AGAIN!");
			backToMenu();
			}
	else	{
			if (verified) {
				alert("Congratulations!\nWhy not try harder?");
				backToMenu();
			}
	}
}

function tryExnm(){
	if (verified&&count < 10){
		count ++;
		if (count == 10) alert("Final Test!");
		$("#level1").text("Level" + count);
		$("#level1").fadeIn();
		addColorBlocks("hexo", function(){
			time_id2 = setTimeout(function(){
				removeBlocks();
				addBlocks("hexo" ,function(){
					time_id1 = setTimeout("removeBlocks();addVerify('hexo');", count*4000);
				})
			}
			, count*4000);
		})
	}
	else if (!verified){
			alert("Don't lose your mind!\nTry AGAIN!");
			backToMenu();
			}
	else	{
			if (verified) {
				alert("Congratulations!\nWhy not try harder?");
				backToMenu();
			}
	}
}
//##############End of GAME BODY################