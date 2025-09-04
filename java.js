function loginPai(usuario, senha) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Alunos");
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][3] === usuario && data[i][4] === senha) {
      return { 
        sucesso: true, 
        tipo: "pai", 
        alunoId: data[i][0], 
        nomeAluno: data[i][1], 
        turma: data[i][2] 
      };
    }
  }
  return { sucesso: false, mensagem: "Login inválido" };
}
