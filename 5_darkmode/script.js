/**
 * fileName       : script
 * author         : Yeong-Huns
 * date           : 2024-12-03
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-12-03        Yeong-Huns       최초 생성
 */


if (
	localStorage.theme === 'dark' ||
	(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
	document.documentElement.classList.add('dark');
} else {
	document.documentElement.classList.remove('dark');
}

function toggleDarkMode() {
	const button = document.querySelector('button');
	if (document.documentElement.classList.contains('dark')) {
		document.documentElement.classList.remove('dark');
		localStorage.theme = "light";
		button.textContent = "다크 모드 활성화";
	} else {
		document.documentElement.classList.add('dark');
		localStorage.theme = 'dark';
		button.textContent = "다크 모드 비활성화";
	}
}