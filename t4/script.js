let notes = [
    {
      title: "Judul 1",
      description: "Deskripsi 1",
    },
    {
      title: "Judul 2",
      description: "Deskripsi 2",
    },
  ];
  
  let notesElement = document.getElementById("notes-list");
  function renderNotes() {
    notesElement.innerHTML = "";
    notes.forEach((note, index) => {
      const newElement = `
              <div class="note">
                  <h3>${note.title}</h3>
                  <p>${note.description}</p>
                  <button onclick="deleteNote(${index})">Hapus</button>
              </div>
  
          `;
  
      notesElement.innerHTML += newElement;
    });
  }
  
  function addNote() {
    console.log("tes");
    const newTitle = document.getElementById("title").value;
    const newDescription = document.getElementById("description").value;
    if (
      newTitle &&
      newDescription &&
      newDescription.length > 1 &&
      newDescription.length > 1
    ) {
      const newData = {
        title: newTitle,
        description: newDescription,
      };
      notes.push(newData);
      renderNotes();
    }
  }
  
  function deleteNotes(index) {
    notes.splice(index, 1);
    renderNotes();
  }
  
  renderNotes();
  