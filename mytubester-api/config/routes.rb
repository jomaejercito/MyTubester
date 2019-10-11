Rails.application.routes.draw do
  
  namespace :api do
    namespace :vi do
      resources :videos
      resources :users
    end
  end
end
