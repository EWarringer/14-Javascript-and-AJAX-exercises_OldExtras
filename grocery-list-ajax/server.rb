require "sinatra"

FILENAME = "grocery_list.txt"

get "/" do
  redirect "/groceries"
end

get "/groceries" do
  groceries = File.read(FILENAME).split
  erb :groceries, locals: { groceries: groceries }
end

post "/groceries" do
  File.open(FILENAME, "a") do |f|
    f.puts params[:item]
  end
  redirect "/groceries"
end

#FOR BONUS CHALLENGE ADD CODE BELOW THIS COMMENT
delete "/groceries" do
  binding.pry
  File.open(FILENAME, "a") do |f|
    f.delete(params[:item])
  end
  redirect "/groceries"
end
