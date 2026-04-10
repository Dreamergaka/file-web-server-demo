const hostedImageUrl = 'https://res.cloudinary.com/djz0dosvd/image/upload/v1775826318/animae_bbd8rb.webp';
const hostedFileUrl = 'https://res.cloudinary.com/djz0dosvd/raw/upload/v1775830599/sample-file_lpzbvb.txt';

document.getElementById('hostedImage').src = hostedImageUrl;
document.getElementById('hostedFileLink').href = hostedFileUrl;
document.getElementById('codeBlock').textContent = `Example integration:\n\n<img src="${hostedImageUrl}" alt="Hosted image">\n<a href="${hostedFileUrl}" target="_blank">Open hosted file</a>\n\nReplace these with the public URLs from your file hosting provider.`;
