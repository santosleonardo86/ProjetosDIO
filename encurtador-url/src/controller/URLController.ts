import { config } from '../config/Constants';
import { Request, Response, response } from 'express';
import shortId from 'shortid';
import { URLModel } from '../database/model/URL';

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        //Ver se a URL já existe
        const { originURL } = req.body
        const url = await URLModel.findOne({ originURL })
        if (url) {
            response.json(url)
            return
        }

        //Criar o hash para essa URL
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        const newURL = await URLModel.create({ hash, shortURL, originURL })
        //Salvar a URL no banco

        //Retornar a URL que salvamos
        response.json(newURL)
    }

    public async redirect(req: Request, response: Response): Promise<void> {
        //Pegar hash da URL
        const { hash } = req.params
        const url = await URLModel.findOne({ hash })

        if (url) {
            //Redirecionar para a URL original a partir do que encontramos no DB
            response.redirect(url.originURL)
            return
        }
        response.status(400).json({ error: 'URL not found' })
    }
}