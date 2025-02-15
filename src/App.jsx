import React from 'react';

function App() {
  return (
    <div>
      <div className="container">
        <h3>ABC Sightreader</h3>
      </div>
      <div className="container">
        <Status />
        <Controls />
        <ABCTextarea />
        <MainDisplay />
        <Playlist />
        <MessageModel />
        <BottomControls />
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="row-fluid">
      <div className="span12" id="status" title="Status">
        1. Select your mic 2. Select your ABC file 3. Press start
      </div>
    </div>
  );
}

function Controls() {
  return (
    <div className="row-fluid controls">
      <div className="span12">
        <label htmlFor="devices">Microphone:</label>
        <select id="devices"></select>

        <label htmlFor="file">File:</label>
        <select id="file">
        <option value="">---Custom ABC---</option>
            <option value="cecilio-lesson1-open-strings.abc">cecilio-lesson1-open-strings.abc</option>
            <option value="cecilio-lesson2-first-position.abc">cecilio-lesson2-first-position.abc</option>
            <option value="cecilio-lesson2-twinkle-twinkle-little-star.abc">cecilio-lesson2-twinkle-twinkle-little-star.abc</option>
            <option value="cecilio-lesson3-exercise-1.abc">cecilio-lesson3-exercise-1.abc</option>
            <option value="cecilio-lesson3-exercise-2.abc">cecilio-lesson3-exercise-2.abc</option>
            <option value="cecilio-lesson3-exercise-3.abc">cecilio-lesson3-exercise-3.abc</option>
            <option value="cecilio-lesson3-exercise-4.abc">cecilio-lesson3-exercise-4.abc</option>
            <option value="cecilio-lesson3-mary-had-a-little-lamb.abc">cecilio-lesson3-mary-had-a-little-lamb.abc</option>
            <option value="cecilio-lesson3-jingle-bells.abc">cecilio-lesson3-jingle-bells.abc</option>
            <option value="cecilio-lesson4-camptown-races.abc">cecilio-lesson4-camptown-races.abc</option>
            <option value="cecilio-lesson4-lightly-row.abc">cecilio-lesson4-lightly-row.abc</option>
            <option value="cecilio-lesson4-russian-dance-tune.abc">cecilio-lesson4-russian-dance-tune.abc</option>
            <option value="cecilio-lesson5-eighth-notes.abc">cecilio-lesson5-eighth-notes.abc</option>
            <option value="cecilio-lesson5-hungarian-folk-song-1.abc">cecilio-lesson5-hungarian-folk-song-1.abc</option>
            <option value="cecilio-lesson5-the-old-gray-goose.abc">cecilio-lesson5-the-old-gray-goose.abc</option>
            <option value="cecilio-lesson6-first-position-d-string.abc">cecilio-lesson6-first-position-d-string.abc</option>
            <option value="cecilio-lesson6-ode-to-joy.abc">cecilio-lesson6-ode-to-joy.abc</option>
            <option value="cecilio-lesson6-scherzando.abc">cecilio-lesson6-scherzando.abc</option>
            <option value="cecilio-lesson7-gavotte.abc">cecilio-lesson7-gavotte.abc</option>
            <option value="cecilio-lesson7-country-gardens.abc">cecilio-lesson7-country-gardens.abc</option>
            <option value="cecilio-lesson7-can-can.abc">cecilio-lesson7-can-can.abc</option>
            <option value="cecilio-lesson8-largo.abc">cecilio-lesson8-largo.abc</option>
            <option value="cecilio-lesson8-dixie.abc">cecilio-lesson8-dixie.abc</option>
            <option value="hot-cross-buns.abc">hot-cross-buns.abc</option>
            <option value="lesson1-open-string-exercise-1.abc">lesson1-open-string-exercise-1.abc</option>
            <option value="lesson1-open-string-exercise-2.abc">lesson1-open-string-exercise-2.abc</option>
            <option value="lesson1-open-string-exercise-3.abc">lesson1-open-string-exercise-3.abc</option>
            <option value="lesson1-open-string-exercise-4.abc">lesson1-open-string-exercise-4.abc</option>
            <option value="lesson1-open-string-exercise-5.abc">lesson1-open-string-exercise-5.abc</option>
            <option value="lesson1-open-string-exercise-6.abc">lesson1-open-string-exercise-6.abc</option>
            <option value="lesson2-1st-finger-exercise-1.abc">lesson2-1st-finger-exercise-1.abc</option>
            <option value="lesson2-1st-finger-exercise-2.abc">lesson2-1st-finger-exercise-2.abc</option>
            <option value="lesson2-1st-finger-exercise-3.abc">lesson2-1st-finger-exercise-3.abc</option>
            <option value="lesson2-1st-finger-exercise-4.abc">lesson2-1st-finger-exercise-4.abc</option>
            <option value="lesson2-1st-finger-exercise-5.abc">lesson2-1st-finger-exercise-5.abc</option>
            <option value="lesson2-1st-finger-exercise-6.abc">lesson2-1st-finger-exercise-6.abc</option>
        </select>

        <label htmlFor="tempo">Tempo:</label>
        <select id="tempo">
            <option value="">inherit</option>
            <option value="30">30</option>
            <option value="60">60</option>
            <option value="90">90</option>
            <option value="120">120</option>
            <option value="180">180</option>
            <option value="240">240</option>
        </select>

        <button id="start" disabled title="Enable mic and begin playing along to sheet music.">Start</button>
        <button id="reset">Reset</button>
        <button id="tune" title="Enable mic and show pitch but don't play a game.">Tune</button>
      </div>
    </div>
  );
}

function ABCTextarea() {
  return (
    <div className="row-fluid" id="abc-textarea-container">
      <div className="span-12">
        <textarea id="abc-textarea"></textarea>
      </div>
    </div>
  );
}

function MainDisplay() {
  return (
    <div className="row-fluid main-display">
      <div className="row-fluid top-info">
        <div id="current-playlist-position" title="Playlist position." className="span4 left">-</div>
        <div id="qpm-display" title="QPM" className="span4 center">-</div>
      </div>
      <div className="span12" id="notation"></div>
      <span id="current-note" title="Expected and actual note detected on the microphone.">-</span>
      <span id="current-volume" title="Microphone volume.">-</span>
      <div id="midi" style={{ display: 'none' }}></div>
      <span id="count-down"></span>
      <span id="loaded-filename">-</span>
    </div>
  );
}

function Playlist() {
  return (
    <div className="row-fluid">
      <div className="span12">
        <ol id="playlist" className="list-group"></ol>
      </div>
    </div>
  );
}

function MessageModel() {
  return (
    <div className="modal fade" id="message-model" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body" style={{ textAlign: 'center' }}></div>
        </div>
      </div>
    </div>
  );
}

function BottomControls() {
    return (
        <div className="row-fluid controls">
            <div className="span12 keyboard-legend">
                <span className="cb-field">
                    <input id="auto-continue" type="checkbox" />
                    <label htmlFor="auto-continue"
                        title="Once score is above average, immediately move on to next playlist item.">
                        Auto-Continue
                    </label>
                </span>
                <span className="cb-field">
                    <input id="ignore-duration" type="checkbox" />
                    <label htmlFor="ignore-duration"
                        title="If checked, will score a note if it's met and will not check duration.">
                        Ignore Duration
                    </label>
                </span>
            </div>
        </div>
    );
}

export default App;
