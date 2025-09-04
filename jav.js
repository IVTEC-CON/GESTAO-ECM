function loginProfessor(usuario, senha) {
  // credenciais fixas (mestre)
  if (usuario === "EEECM" && senha === "Ver@") {
    return { sucesso: true, tipo: "professor" };
  }
  return { sucesso: false, mensagem: "Login inválido" };
}
