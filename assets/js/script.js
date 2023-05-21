//check input is number not string
function cekInteger(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

//function for cetak luas page
function selectLuas() {
  alert(
    "Welcome to the calculator app (Luas Persegi), click the header to return to the main menu"
  );
  document.getElementById(
    "mainAction"
  ).innerHTML = `<a href="index.html"><header>
  <h2>Luas Persegi</h2>
</header></a>
<section>
  <figure>
    <img src="assets/img/persegi.png" alt="Bujur Sangkar" />
  </figure>
  <figcaption>
    <p>Rumus luas persegi yaitu : L = S X S</p>
    <p>Dimana : <br />L = Luas<br />S= Sisi</p>
  </figcaption>
  <article>
    <h2>Hitung Luas Persegi</h2>
    <input
      type="text"
      id="sisi"
      name="sisi-persegi"
      onkeypress="return cekInteger(event)"
    />
    <div class="result" id="output">
      <!-- result in here -->
    </div>
    <footer>
      <button type="button" class="submit" onclick="submitLuas()">
        Hitung
      </button>
      <button type="button" class="reset" onclick="reset()">Reset</button>
    </footer>
  </article>
</section>`;
}

//function for hitung luas on luas persegi page
function submitLuas() {
  var x = document.getElementById("sisi").value;
  if (!x) {
    alert("Enter a value first!");
  } else {
    var resultPersegi = x * x;
    document.getElementById("output").innerHTML =
      "<p>L = S x S</p> <p>L = " + x + " x " + x + "<p>L = " + resultPersegi;
  }
}

//function for cetak keliling page
function selectKeliling() {
  alert(
    "Welcome to the calculator app (Keliling Persegi), click the header to return to the main menu"
  );
  document.getElementById(
    "mainAction"
  ).innerHTML = `<a href="index.html"><header>
    <h2>Keliling Persegi</h2>
  </header></a>
  <section>
    <figure>
      <img src="assets/img/persegi.png" alt="Bujur Sangkar" />
    </figure>
    <figcaption>
      <p>Rumus Keliling persegi yaitu : K = 4 X S</p>
      <p>Dimana : <br />K = Keliling<br />S= Sisi</p>
    </figcaption>
    <article>
      <h2>Hitung Keliling Persegi</h2>
      <input
        type="text"
        id="sisi"
        name="sisi-persegi"
        onkeypress="return cekInteger(event)"
      />
      <div class="result" id="output">
        <!-- result in here -->
      </div>
      <footer>
        <button type="button" class="submit" onclick="submitKeliling()">
          Hitung
        </button>
        <button type="button" class="reset" onclick="reset()">Reset</button>
      </footer>
    </article>
  </section>`;
}

//function for hitung keliling on keliling persegi page
function submitKeliling() {
  var x = document.getElementById("sisi").value;
  if (!x) {
    alert("Enter a value first!");
  } else {
    var kelilingPersegi = 4 * x;
    document.getElementById("output").innerHTML =
      "<p>K = 4 x S</p> <p>K = 4 x " + x + "<p>K = " + kelilingPersegi;
  }
}

//function reset button
function reset() {
  var resultBox = document.getElementById("output").value;
  var inputBox = document.getElementById("sisi").value;
  if (!resultBox && !inputBox) {
    alert("No data specified, please check again!");
  } else if (
    confirm("Reset will delete all data on the form, are you sure?") == true
  ) {
    document.getElementById("output").innerHTML = "";
    document.getElementById("sisi").value = "";
    alert("Reset Succesfully");
    window.onload();
  }
}
