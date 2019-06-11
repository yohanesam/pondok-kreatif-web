<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        {{-- <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css"> --}}
        <link href="{{ url('css/style.css') }}" rel="stylesheet" type="text/css">

    </head>
    <body>
        {{-- BEGIN ROOT CLASS --}}
        <div id="root"></div>
        {{-- END ROOT CLASS --}}
        {{-- BEGIN REACT JS CODE --}}
        <script src="{{ mix('js/app.js') }}"></script>
        {{-- END REACT JS CODE --}}

    </body>
    
</html>
