<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fiesta;
use Carbon\Carbon;

class FiestaController extends Controller
{
    public function store(Request $request){
        $fiesta= new Fiesta();
        $fiesta->nombre=$request->nombre;
        $fiesta->apellido=$request->apellido;
        $fiesta->edad=$request->edad;
        $fiesta->acompanantes=$request->acompanantes;
        $fiesta->hora=Carbon::now();
        $fiesta->save();
        return redirect('/');
    }
    
    public function index()
    {
        $fiestas = Fiesta::all();
        return view('home')->with('fiestas', $fiestas);
    }

    public function destroy($id)
    {
        $fiesta = fiesta::find($id);
        $fiesta -> delete();
        return redirect('/home');
    }

}
