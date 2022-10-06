class NotesController < ApplicationController

    def show 
        render json: find_note, status: :ok
    end

    def create 
        note = Note.create!(note_params)
        render json: note, status: :created
    end

    def update
        note = find_note
        note.update!(note_params)
        render json: note, status: :ok
    end

    def destroy
        note = find_note
        note.destroy
        head :no_content
    end

    private

    def note_params
        params.permit(:body, :user_id)
    end

    def find_note 
        Note.find(params[:id])
    end
end
