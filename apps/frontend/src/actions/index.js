const UPDATE_ACTIONS = {
  NUM_TRIES_UPDATE: 'update_num_tries',
  FOUND_TODAYS_CHARACTER: 'found_todays_char',
  UPDATE_CHARACTERS_SELECTED: 'update_characters_selected',
  UPDATE_AVAILABLE_CHARACTERS: 'update_available_characters',
  UPDATE_SEARCHING_NAMES: 'update_searching_names',
  UPDATE_INPUT_NAME: 'update_input_name',
  UPDATE_NO_CHARACTER_FOUND: 'update_no_character_found',
  UPDATE_TODAYS_CHAR: 'update_todays_char',
  UPDATE_YESTERDAYS_CHAR: 'update_yesterdays_char',
}

const CLASSIC_ACTIONS = {
  UPDATE_FIRST_APPARITION_CLUE: 'update_first_apparition_clue',
  UPDATE_DEVIL_FRUIT_CLUE: 'update_devil_fruit_clue',
  SHOW_FIRST_APPARITION_CLUE_SHOW: 'show_first_apparition_clue',
  SHOW_DEVIL_FRUIT_CLUE_SHOW: 'show_devil_fruit_clue',
  SHOW_COLOR_INDICATORS: 'show_color_indicators',
  UPDATE_ARCS: 'update_arcs',
  CLEAR_GAME: 'clear_classic_game',
  CLEAR_CLUES: 'clear_classic_clues'
}

const DEVIL_FRUIT_ACTIONS = {
  UPDATE_TYPE_CLUE: 'update_type_clue',
  UPDATE_TRANSLATE_CLUE: 'update_translate_clue',
  UPDATE_EXPLANATION_CLUE: 'update_explanation_clue',
  SHOW_TYPE_CLUE_SHOW: 'show_type_clue',
  SHOW_TRANSLATE_CLUE_SHOW: 'show_translate_clue',
  SHOW_EXPLANATION_CLUE_SHOW: 'show_explanation_clue',
  CLEAR_GAME: 'clear_devil_fruit_game',
  CLEAR_CLUES: 'clear_devil_fruit_clues'
}

const WANTED_ACTIONS = {
  UPDATE_BOUNTY_CLUE: 'update_bounty_clue',
  SHOW_BOUNTY_CLUE: 'show_bounty_clue',
  UPDATE_BLUR_PIXELS: 'update_blur_pixels',
  UPDATE_BLUR_DISPLAY: 'update_blur_display',
  UPDATE_DISPLAY_COLORS: 'update_display_colors',
  CLEAR_GAME: 'clear_wanted_game',
  CLEAR_CLUES: 'clear_wanted_clues'
}

const LAUGH_ACTIONS = {
  UPDATE_PLAYING_LAUGH: 'update_playing_laugh',
  UPDATE_ORIGIN_CLUE: 'update_origin_clue',
  SHOW_ORIGIN_CLUE: 'show_origin_clue',
  UPDATE_AFFILIATION_CLUE: 'update_affiliation_clue',
  SHOW_AFFILIATION_CLUE: 'show_affiliation_clue',
  CLEAR_GAME: 'clear_laugh_game',
  CLEAR_CLUES: 'clear_laugh_clues'
}

const TIME_ACTIONS = {
  UPDATE_DAYS: 'update_days',
  UPDATE_HOURS: 'update_hours',
  UPDATE_MINUTES: 'update_minutes',
  UPDATE_SECONDS: 'update_seconds',
  UPDATE_TIMER_ENDED: 'update_timer_ended'
}

export { UPDATE_ACTIONS, CLASSIC_ACTIONS, DEVIL_FRUIT_ACTIONS, WANTED_ACTIONS, LAUGH_ACTIONS, TIME_ACTIONS }

