function exameCountDown(exameHorario) {
	const { dataInicio, dataFim } = JSON.parse(exameHorario)
	const fimExame = new Date(dataFim).getTime()
	const tempoRestante = fimExame - new Date().getTime()
	const tempoRestanteSegundos = tempoRestante / 1000

	const updateTempo = () => {
		const dias = Math.floor(tempoRestanteSegundos / (60 * 60 * 24)) // quantidade de segundos em um dia
		const horas = Math.floor((tempoRestanteSegundos % (60 * 60 * 24)) / (60 * 60)) // quantidade de horas
		const minutes = Math.floor((tempoRestanteSegundos % (60 * 60)) / 60)
		const segundos = Math.floor(tempoRestanteSegundos % 60)

		const countDownElemento = document.querySelector("#tempoRestante")
		dias >= 0 ? (countDownElemento.innerHTML += `dias: ${dias}:`) : ""
		horas >= 0 ? (countDownElemento.innerHTML += `${horas}h:`) : "00h:"
		minutes >= 0 ? (countDownElemento.innerHTML += `${minutes}m:`) : "00m:"
		segundos >= 0 ? (countDownElemento.innerHTML += `${segundos}s`) : "Fim"

		if (tempoRestante > 0) setTimeout(updateTempo, 1000)

		console.log(`dias: ${dias} - horas: ${horas} - minutos: ${minutes} - segunods: ${segundos}`)
	}
}
