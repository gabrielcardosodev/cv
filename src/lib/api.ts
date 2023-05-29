export async function sendContactForm(data: any) {
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
}