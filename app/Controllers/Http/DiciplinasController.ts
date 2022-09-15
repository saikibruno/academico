// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Diciplina from "App/Models/Diciplina";

export default class DiciplinasController {
    index(){
        return Diciplina.all()
    }

    store(){}
}
