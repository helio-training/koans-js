describe('Array Koan', () => {

  describe('Basics', () => {

    describe('Empty', () => {

      it('has a length', () => expect([].length).to.be.equal(__FILL_ME_IN__));

    });

    describe('Indexes', () => {
      const makes = ['Acura', 'Honda', 'BMW', 'Tesla', 'Mercedes'];

      it('first element', () => expect(makes[0]).to.be.equal(__FILL_ME_IN__));

      it('Last element', () => expect(makes[4]).to.be.equal(__FILL_ME_IN__));

    });

    describe('Literals', () => {

      it('dynamic assignment', () => {
        const array = [];
        expect(array).to.equal(__FILL_ME_IN__);

        array[0] = 1;
        expect(array).to.equal(__FILL_ME_IN__);

        array[1] = 2;
        expect(array).to.equal(__FILL_ME_IN__);

        array.push(3);
        expect(array).to.equal(__FILL_ME_IN__);
      });
    });

    describe('Length', () => {
      const array = [1, 2, 3, 4];

      it('has a length of', () => expect(array.length).to.equal(__FILL_ME_IN__));

      it('adds elements and has length', () => {
        array.push(5, 6);
        expect(array.length).to.equal(__FILL_ME_IN__);
      })
    });

    describe('Slicing', () => {
      const array = ['peanut', 'butter', 'jelly', 'time'];

      it('to be sliced by', () => {

        expect(array.slice(0, 1)).to.equal(__FILL_ME_IN__);
        expect(array.slice(0, 2)).to.equal(__FILL_ME_IN__);
        expect(array.slice(2, 2)).to.equal(__FILL_ME_IN__);
        expect(array.slice(2, 20)).to.equal(__FILL_ME_IN__);
        expect(array.slice(3, 0)).to.equal(__FILL_ME_IN__);
        expect(array.slice(3, 100)).to.equal(__FILL_ME_IN__);
        expect(array.slice(5, 1)).to.equal(__FILL_ME_IN__);
      });

    });

    describe('Push / Pop', () => {


      it('push a value', () => {
        const array = [1, 2];
        array.push(3);
        expect(array).to.equal(__FILL_ME_IN__);
      });

      it('pop a value', () => {
        const array = [1, 2, 3];

        // Pop a value
        expect(array.pop()).to.equal(__FILL_ME_IN__);

        expect(array).to.equal(__FILL_ME_IN__);
      });

    });

    describe('Shifting', () => {

      it('unshifting and shifting', () => {
        const array = [1, 2];
        array.unshift(3);

        expect(array).to.equal(__FILL_ME_IN__);

        expect(array.shift()).to.equal(__FILL_ME_IN__);
        expect(array).to.equal(__FILL_ME_IN__);
      });
    });

  });

});
