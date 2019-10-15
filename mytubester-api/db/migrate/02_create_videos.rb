class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :video_url
      t.string :description
      t.time :duration
      t.string :uploaded_by
      t.datetime :uploaded_at
      t.integer :views
      t.integer :user_id

      t.timestamps
    end
  end
end
