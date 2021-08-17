export const getIncomingCallDialog = (callTypeInfo, acceptCallHandler, rejectCallHandler) => {

    const dialog = document.createElement("div")
    dialog.classList.add("dialog_wrapper")
    const dialogContent = document.createElement("div")
    dialogContent.classList.add('dialog_content')

    dialog.appendChild(dialogContent)

    const title = document.createElement('p')
    title.classList.add('dialog_title')
    title.innerHTML = `incoming ${callTypeInfo} call`

    const imageContainer = document.createElement("div")
    imageContainer.classList.add('dialog_image_container')
    const image = document.createElement('img')
    const avatarImagePath = './utils/images/dialogAvatar.png'
    image.src = avatarImagePath;
    imageContainer.appendChild(image)

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add("dialog_button_container")

    const acceptCallButton = document.createElement('button')
    acceptCallButton.classList.add("dialog_accept_call_button")
    const acceptCalling = document.createElement('img')
    acceptCalling.classList.add('dialog_button_image')
    const acceptCallingImgPath = './utils/images/acceptCall.png'
    acceptCalling.src = acceptCallingImgPath
    acceptCallButton.appendChild(acceptCalling)
    buttonContainer.appendChild(acceptCallButton)


    const rejectCallButton = document.createElement('button')
    rejectCallButton.classList.add("dialog_reject_call_button")
    const rejectCalling = document.createElement('img')
    rejectCalling.classList.add('dialog_button_image')
    const rejectCallingImgPath = './utils/images/rejectCall.png'
    rejectCalling.src = rejectCallingImgPath
    rejectCallButton.appendChild(rejectCalling)
    buttonContainer.appendChild(rejectCallButton)




    dialogContent.appendChild(title)
    dialogContent.appendChild(imageContainer)
    dialogContent.appendChild(buttonContainer)
    return dialog

}