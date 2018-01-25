import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dungeon-loot', 'Integration | Component | dungeon loot', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dungeon-loot}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dungeon-loot}}
      template block text
    {{/dungeon-loot}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
