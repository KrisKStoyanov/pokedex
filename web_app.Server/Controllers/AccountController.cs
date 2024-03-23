using Microsoft.AspNetCore.Mvc;

namespace web_app.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly ILogger<AccountController> _logger;

        public AccountController(ILogger<AccountController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetAccount")]
        public Account Get()
        {
            Account account = new Account { Forename = "", Surname = "", Country = "" };
            return account;
        }
    }
}
