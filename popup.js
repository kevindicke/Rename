console.log('something')
function something(){
  newName = document.getElementById('newName').value;
  ogName = document.getElementById('ogName').value;
  let name = {
    newName,
    ogName
  }
  chrome.tabs.query({active: true, currentWindow: true},(tabs)=>{
    chrome.tabs.sendMessage(tabs[0].id, {name})
  })
}
document.getElementById('submitBtn').onclick = something;
