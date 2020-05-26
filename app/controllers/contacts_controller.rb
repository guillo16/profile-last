class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    respond_to do |format|
      if @contact.deliver
        format.html { redirect_to 'pages/home' }
        format.js { flash[:alert] = "Gracias por su mensaje, lo contactaremos pronto" }
      else
        format.html { render 'index' }
        format.js   { flash[:notice] = "Thank you for" }
      end
    end
  end
end
