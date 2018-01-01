chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  let ogName = request.name.ogName
  let replace = new RegExp(ogName,"g")
  document.body.innerHTML = document.body.innerHTML.replace(replace, request.name.newName)
})
