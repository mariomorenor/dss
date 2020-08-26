<?php

use App\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'=>'Stalin Pinos',
            'email'=>'sjpinoss@pucesd.edu.ec',
            'password'=>Hash::make('123'),
            'email_verified_at'=>Carbon::now()
        ]);
        User::create([
            'name'=>'Mario Moreno',
            'email'=>'mario_x64@hotmail.com',
            'password'=>Hash::make('123'),
            'email_verified_at'=>Carbon::now()
        ]);
    }
}
