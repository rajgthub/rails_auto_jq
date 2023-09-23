class AutocompleteController < ApplicationController
    def books
        term = params[:term]
    
        @books = Book.where(Book.arel_table[:title].lower.matches("%#{term.downcase}%")).limit(10)
        
        render json: @books&.pluck(:title)
      end
end
