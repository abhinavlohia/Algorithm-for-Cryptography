const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = " `~!@#$%^&*()-_+={}[]|;:<>,.’?/";

function encryption()
{
  var message=document.getElementById("original").value;
  var ans="";
  var n = message.length;
  for (var i = 0; i < n; i++)
  {
    var index;
    if (message[i] >= 'A' && message[i] <= 'Z')
    {
      index = upper.indexOf(message[i]);
      index = (index + i) % 26;
      ans += upper[index];
    }
    else if (message[i] >= 'a' && message[i] <= 'z')
    {
      index = lower.indexOf(message[i]);
      index = (index + i) % 26;
      ans += lower[index];
    }
    else if (message[i] >= '0' && message[i] <= '9')
    {
      index = number.indexOf(message[i]);
      index = (index + i) % 10;
      ans += number[index];
    }
    else
    {
      index = symbol.indexOf(message[i]);
      index = (index + i) % 31;
      ans += symbol[index];
    }
  }
  document.getElementById("encrypted").value=ans;
}

function decryption()
{
  var message=document.getElementById("encrypted").value;
  var n = message.length;
  var ans=""
  for (var i = 0; i < n; i++)
  {
    var index;
    var temp_i = i;
    if (message[i] >= 'A' && message[i] <= 'Z')
    {
      index = upper.indexOf(message[i]);
      temp_i %= 26;
      index -= temp_i;
      if (index < 0)
        index += 26;
      ans += upper[index];
    }
    else if (message[i] >= 'a' && message[i] <= 'z')
    {
      index = lower.indexOf(message[i]);
      temp_i %= 26;
      index -= temp_i;
      if (index < 0)
        index += 26;
      ans += lower[index];
    }
    else if (message[i] >= '0' && message[i] <= '9')
    {
      index = number.indexOf(message[i]);
      temp_i %= 10;
      index -= temp_i;
      if (index < 0)
        index += 10;
      ans += number[index];
    }
    else
    {
      index = symbol.indexOf(message[i]);
      temp_i %= 31;
      index -= temp_i;
      if (index < 0)
        index += 31;
      ans += symbol[index];
    }
  }
  document.getElementById("decrypted").value=ans;
}
