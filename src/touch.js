const process = require('child_process');
// let isWin = /^win/.test(process.platform);
//
// if (!isWin) {
//     process.env.PATH = process.env.PATH + ':/usr/local/bin';
// }
function exec(shell) {
    process.exec(shell,function (error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
}

function click() {
    console.log('click')
    exec(`adb shell input tap 400 600`)
    setTimeout(back, 1000)
}

// 打开抖音
function open(){
    exec(`adb shell am start -n com.ss.android.ugc.aweme/com.ss.android.ugc.aweme.splash.SplashActivity`)
}

function swipe() {
    console.log('swipe')
    exec(`adb shell input swipe 400 800 400 0 500`)
    setTimeout(swipe, 5000)
}

function back() {
    console.log('back')
    exec(`adb shell input keyevent 4`)
    // setTimeout(swipe, 1000)
}

function demo(){
    exec(`adb shell input text "FutureWL"`)
    exec(`adb shell input KEYCODE_ENTER`)
}

module.exports = {
    demo,
    open,
    click,
    swipe,
    back
}

// adb shell am start com.ss.android.ugc.aweme/android.intent.action.MAIN
// windows查找当前包名
// adb shell dumpsys window windows | findstr "Current"
//mac
// adb shell dumpsys window windows | grep "Current"



// adb shell am start -a android.intent.action.MAIN -c android.intent.category.LAUNCHER -n com.ss.android.ugc.aweme/com.ss.android.ugc.aweme.splash.SplashActivity


// adb shell am start -n com.ss.android.ugc.aweme/com.ss.android.ugc.aweme.splash.SplashActivity
// adb remount

// qq
// com.tencent.mobileqq/.activity.SplashActivity mSnapshot=android.graphics.GraphicBuffer@c7ec9cf
// 微信
// com.tencent.mm/.ui.LauncherUI
