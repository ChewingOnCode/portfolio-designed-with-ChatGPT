function toggleSubFolders(folder) {
	const content = folder.querySelector(".folder-content");
	content.style.display = content.style.display === "block" ? "none" : "block";
	folder.classList.toggle("opaque");
}

function openModal(title, started, completed) {
	const modal = document.getElementById("modal");
	const modalTitle = document.getElementById("modal-title");
	const dateStarted = document.getElementById("date-started");
	const dateCompleted = document.getElementById("date-completed");

	modalTitle.textContent = title;
	dateStarted.textContent = started;
	dateCompleted.textContent = completed;

	modal.style.display = "block";
}

function closeModal() {
	const modal = document.getElementById("modal");
	modal.style.display = "none";
}
