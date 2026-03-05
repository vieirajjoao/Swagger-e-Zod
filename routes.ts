import { Router, Request, Response } from 'express';

const routes = Router();

routes.post('/pacientes', (req: Request, res: Response) => {
  const data = req.body;

  // Sem validação, apenas confiamos no que vem do usuário
  console.log("Dados recebidos:", data);

  return res.status(201).json({
    message: "Paciente criado (sem validação)!",
    data: data
  });
});

export { routes };