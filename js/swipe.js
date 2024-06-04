// タップ時の誤動作を防ぐためのスワイプ時の処理を実行しない最小距離
const minimumDistance = 200
// スワイプ開始時の座標
let startX = 0
let startY = 0
// スワイプ終了時の座標
let endX = 0
let endY = 0

// 解説①：移動を開始した座標を取得
window.addEventListener('touchstart', (e) => {
	startX = e.touches[0].pageX
	startY = e.touches[0].pageY
	console.log(startX)
})

// 解説②：移動した座標を取得
window.addEventListener('touchmove', (e) => {
	endX = e.changedTouches[0].pageX
	endY = e.changedTouches[0].pageY
	console.log(endX)
})

// 解説③：移動距離から左右or上下の処理を実行
window.addEventListener('touchend', (e) => {
	// スワイプ終了時にx軸とy軸の移動量を取得
	// 左スワイプに対応するためMath.abs()で+に変換
	const distanceX = Math.abs(endX - startX)
	const distanceY = Math.abs(endY - startY)

	// 左右のスワイプ距離の方が上下より長い && 小さなスワイプは検知しないようにする
	if (distanceX > distanceY && distanceX > minimumDistance) {
		// スワイプ後の動作
		console.log('左右スワイプ')
		if (startX < endX) {
			console.log('右スワイプ')
			rightswipe()
		} else if (startX > endX) {
			console.log('左スワイプ')
			leftswipe()
		}
	}

	if (distanceX < distanceY && distanceY > minimumDistance) {
		// スワイプ後の動作
		console.log('上下スワイプ')
		if (startY < endY) {
			console.log('下スワイプ')
			notif('設定', 'ここを押してして設定画面を開きます', 'settings')
		} else if (startY > endY) {
			console.log('上スワイプ')
			return
		}
	}
})

function rightswipe() {
	if (location.search == '') {
		samepage()
	} else if (location.search == '?docs') {
		// to home
		nextpage('/', 'right')
	} else if (location.search == '?info') {
		// to docs
		nextpage('?docs', 'right')
	}
}

function leftswipe() {
	if (location.search == '') {
		// to docs
		nextpage('?docs', 'left')
	} else if (location.search == '?docs') {
		// to info
		nextpage('?info', 'left')
	} else if (location.search == '?info') {
		samepage()
	}
}