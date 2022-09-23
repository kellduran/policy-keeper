class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :user_email, null: false
      t.string :user_name, null: false
      t.string :password_digest, null: false
      t.string :confirmation_token
      t.boolean :email_confirmed, default: false
      t.boolean :is_admin, default: false

      t.timestamps
    end
  end
end
