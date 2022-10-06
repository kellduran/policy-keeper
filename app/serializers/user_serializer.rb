class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_email, :user_name, :favorites, :notes 

 
  has_many :notes
  def favorites
    self.object.favorites.map { |f| { favorite_id: f.id, policy: f.policy } }
  end

  # def notes 
  #   self.object.notes.map { |n| { note_id: n.id, body: n.body } }
  # end
end
