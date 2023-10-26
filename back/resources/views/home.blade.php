@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div><br>
            <h1> Gestion de Reservas </h1><br>
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Hora</th>
                    <th scope="col">Acompañantes</th>
                    <th scope="col">Accion</th>

                  </tr>
                </thead>
                <tbody>
                  

                    @foreach ($fiestas as $fiesta)
                    <tr>
                    <td>{{$fiesta->nombre}}</td>
                    <td>{{$fiesta->apellido}}</td>
                    <td>{{$fiesta->edad}}</td>
                    <td>{{$fiesta->hora}}</td>
                    <td>{{$fiesta->acompanantes}}</td>   
                    <td>
                        <form action="{{route('fiesta.destroy',$fiesta->id)}}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">Eliminar</button>
                        </form>                     
                    @endforeach

                  </tr>
                  
                </tbody>
              </table>
              <p>Taller realizado por Estefany Ocampo, Adrian Camilo Ledezma</p>
        </div>
    </div>
</div>
@endsection
