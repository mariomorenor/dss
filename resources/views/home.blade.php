@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row mt-5 justify-content-center">
        <h1 class="text-white shadow-lg" style="text-shadow: 2px 2px rgb(247, 91, 91)">Elije los componentes de tu PC MASTER RACE</h1>
        <div class="col-md-8">
            <div class="mt-5">
                <div id="gd-widget-div"></div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')
    <script  type="text/javascript" src="https://www.game-debate.com/system-requirement-js-widget/script?domain=aplicacionesdifusas.test&theme=light"></script>
    <script src="{{ asset('js/dss.js') }}"></script>
    <script>
       setTimeout(() => {
           init()
       }, 500);
    

    </script>
@endpush

@section('styleBody')
style="background-image: url({{asset('img/fondo3.jpg')}}); background-repeat: no-repeat; background-size: 1920px 1080px;"
@endsection