def game_info
  [
    {
      home_team: "Patriots",
      away_team: "Broncos",
      home_score: 7,
      away_score: 3
    },
    {
      home_team: "Broncos",
      away_team: "Colts",
      home_score: 3,
      away_score: 0
    },
    {
      home_team: "Patriots",
      away_team: "Colts",
      home_score: 11,
      away_score: 7
    },
    {
      home_team: "Steelers",
      away_team: "Patriots",
      home_score: 7,
      away_score: 21
    }
  ]
end

class Leaderboard
  attr_reader :array

  def initialize(array)
    @array = array
  end

  def ranked_teams
    score_teams
    rank_teams
    count = 0
    teams.map do |t|
      count += 1
      "#{count}: #{t.name} - Wins: #{t.wins} - Losses: #{t.losses} \n"
    end
  end

  def rank_teams
    teams.sort_by! do |t|
      t.wins <=> t.wins
    end
  end

  def score_teams
    games.each do |game|
      winner = teams.find {|t| t.name == game.winner }
      loser = teams.find {|t| t.name == game.loser }
      winner.add_win
      loser.add_loss
    end
  end

  def games
    array.map do |game|
      Game.new(game[:home_team], game[:away_team], game[:home_score], game[:away_score])
    end
  end

  def teams
    @_teams ||= begin
      team_names.map do |t|
        Team.new(t)
      end
    end
  end

  def team_names
    new_array = []
    array.each do |game|
      new_array << game[:home_team] unless new_array.include? game[:home_team]
      new_array << game[:away_team] unless new_array.include? game[:away_team]
    end
    new_array
  end

end

class Team
  attr_reader :name, :wins, :losses

  def initialize(name)
    @name = name
    @wins = 0
    @losses = 0
  end

  def add_win
    @wins += 1
  end

  def add_loss
    @losses += 1
  end

end

class Game
  attr_reader :home_team, :away_team, :home_score, :away_score

  def initialize(home_team, away_team, home_score, away_score)
    @home_team = home_team
    @away_team = away_team
    @home_score = home_score
    @away_score = away_score
  end

  def winner
    if home_score > away_score
      home_team
    else
      away_team
    end
  end

  def loser
    if home_score < away_score
      home_team
    else
      away_team
    end
  end
end

leaderboard = Leaderboard.new(game_info)
puts leaderboard.ranked_teams

puts("I do know how to spell 'faberge' egg")
