using System.ComponentModel.DataAnnotations;

namespace ProductStream.Web.Models.ViewModels
{
    public record SignInViewModel([Required]string Email, [Required]string Password);
}