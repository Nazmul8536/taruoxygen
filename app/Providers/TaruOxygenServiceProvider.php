<?php
namespace App\Providers;
use Illuminate\Support\ServiceProvider;

class TaruOxygenServiceProvider extends ServiceProvider{



    public function boot(){
        $this->app->bind('App\\core\\category\\category','App\\core\\category\\categoryDetails');
    }
}
