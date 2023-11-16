<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="antialiased">
    <div
        class="items-top relative flex min-h-screen justify-center bg-gray-100 py-4 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div class="mx-auto max-w-6xl sm:px-6 lg:px-8">
            <div class="flex justify-center pt-8 sm:justify-start sm:pt-0"></div>

            <div class="mt-8">
                <div class="">
                    <div class="text-6xl text-pink-500 font-extrabold hover:cursor-pointer">
                        <span class="hover:text-8xl -mx-1.5 -px-2 transition-all duration-300">R</span>
                        <span class="hover:text-8xl -mx-1.5 -px-2 transition-all duration-300">E</span>
                        <span class="hover:text-8xl -mx-1.5 -px-2 transition-all duration-300">S</span>
                        <span class="hover:text-8xl -mx-1.5 -px-2 transition-all duration-300">T</span>
                        <span class="span">ful </span>
                        <span class="span">Web </span>
                        <span class="span">API</span>
                    </div>
                    <p class="text-sm text-gray-400 animate-bounce">Content Management System</p>
                    <div class="text-white text-xs"> Total Visitor Count: {{ \App\Models\VisitorLog::all()->count() }}
                    </div>
                    <div class="text-white text-xs"> Today's Visitor Count:
                        {{ \App\Models\VisitorLog::whereDate('created_at', \Carbon\Carbon::today())->get()->count() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
