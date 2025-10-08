    let text = document.querySelector(".text p");

    text.innerHTML = text.innerText
      .split("")
      .map((char, i) =>
        `<b style="transform:rotate(${i * 7}deg)">${char}</b>`
      )
      .join("");

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Khadija Tul Kubra",
  "url": "https://rosejahejo100-eng.github.io/khadijatulkubra",
  "logo": "https://rosejahejo100-eng.github.io/khadijatulkubra/assets/favicon.png"
}
</script>




