/** Monta o link que abre uma conversa no WhatsApp com a mensagem já preenchida. */
export function buildWhatsAppLink(phoneNumber: string, message: string): string {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}
