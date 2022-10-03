class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_email, :user_name, :favorites 



  def favorites
    self.object.favorites.map {|f| {favorite_id: f.id, policy: f.policy}}
  end
end
