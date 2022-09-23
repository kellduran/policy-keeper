class RenameEmailConfirmedToEmailValidated < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :email_confirmed, :email_validated
  end
end
